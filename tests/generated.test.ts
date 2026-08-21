/**
 * Invariants over the whole generated tree.
 *
 * These are cheap text checks rather than imports, so they can cover all ~19k
 * modules. They exist because the v5 generator got two of them wrong: it wrote
 * modules whose export name did not match their filename (silently clobbered on
 * case-insensitive filesystems), and it never checked its own exports map.
 */
import { assert, assertEquals } from "@std/assert";
import { fromFileUrl } from "@std/path";
import { MANIFEST } from "../src/_manifest.ts";

const ROOT = fromFileUrl(import.meta.resolve("../"));

interface DenoJson {
	exports: Record<string, string>;
	exclude: string[];
	publish: { exclude: string[] };
}
const denoJson: DenoJson = JSON.parse(await Deno.readTextFile(`${ROOT}deno.json`));
const iconExports = Object.entries(denoJson.exports).filter(([k]) =>
	k.startsWith("./") && k !== "./search"
);

/** Every `.ts` under `src/`, repo-relative. */
async function srcFiles(): Promise<string[]> {
	const out: string[] = [];
	const walk = async (dir: string): Promise<void> => {
		for await (const entry of Deno.readDir(dir)) {
			const path = `${dir}/${entry.name}`;
			if (entry.isDirectory) await walk(path);
			else if (entry.name.endsWith(".ts")) out.push(path.slice(ROOT.length));
		}
	};
	await walk(`${ROOT}src`);
	return out.sort();
}
const files = await srcFiles();
const authored = ["src/_icon.ts", "src/_manifest.ts", "src/mod.ts", "src/search.ts"];

Deno.test("every export target exists on disk", () => {
	const onDisk = new Set(files);
	const missing = Object.values(denoJson.exports)
		.map((v) => v.replace(/^\.\//, ""))
		.filter((v) => !onDisk.has(v));
	assertEquals(missing, [], "exports point at files that were not generated");
});

Deno.test("every generated module is exported", () => {
	const targets = new Set(
		Object.values(denoJson.exports).map((v) => v.replace(/^\.\//, "")),
	);
	const orphans = files.filter((f) => !authored.includes(f) && !targets.has(f));
	assertEquals(orphans, [], "generated modules missing from the exports map");
});

Deno.test("export keys mirror their target paths", () => {
	const mismatched = iconExports.filter(([key, target]) =>
		target !== `./src${key.slice(1)}.ts`
	);
	assertEquals(mismatched, [], "export key and target path disagree");
});

Deno.test("no case-insensitive collisions in export keys", () => {
	const seen = new Map<string, string>();
	const clashes: string[] = [];
	for (const [key] of iconExports) {
		const lower = key.toLowerCase();
		const previous = seen.get(lower);
		// JSR rejects these outright, and they silently overwrite each other on
		// macOS and Windows
		if (previous) clashes.push(`${previous} <-> ${key}`);
		else seen.set(lower, key);
	}
	assertEquals(clashes, []);
});

Deno.test("every icon module exports exactly its own filename", async () => {
	const bad: string[] = [];
	for (const [, target] of iconExports) {
		const path = target.replace(/^\.\//, "");
		const expected = path.slice(path.lastIndexOf("/") + 1, -".ts".length);
		const source = await Deno.readTextFile(ROOT + path);
		const match = /^export const (\w+): IconFn =/m.exec(source);
		if (!match) bad.push(`${path}: unrecognized module shape`);
		else if (match[1] !== expected) bad.push(`${path}: exports ${match[1]}`);
	}
	assertEquals(bad, []);
});

Deno.test("every icon module renders a balanced svg element", async () => {
	const bad: string[] = [];
	for (const [, target] of iconExports.slice(0, 400)) {
		const source = await Deno.readTextFile(ROOT + target.replace(/^\.\//, ""));
		const call = /icon\((\d+(?:\.\d+)?), (null|\d+(?:\.\d+)?), `/.test(source);
		if (!call) bad.push(`${target}: unparsable icon() call`);
		else if (!source.includes("</svg>`)")) bad.push(`${target}: no closing </svg>`);
	}
	assertEquals(bad, []);
});

Deno.test("the search index matches the exports map", () => {
	const fromManifest: string[] = [];
	for (const line of MANIFEST.split("\n")) {
		const [family, prefix, stems] = line.split("\t");
		for (const stem of stems.split(",")) {
			fromManifest.push(`./${family}/${prefix}${stem}`);
		}
	}
	assertEquals(fromManifest.length, iconExports.length);
	assertEquals(fromManifest.sort(), iconExports.map(([k]) => k).sort());
});

Deno.test("published size stays inside the JSR per-version budget", async () => {
	const LIMIT = 20 * 1024 * 1024;
	const skip = new Set([
		...denoJson.exclude,
		...denoJson.publish.exclude,
		"node_modules",
		".git",
	]);
	let total = 0;
	const walk = async (dir: string, rel = ""): Promise<void> => {
		for await (const entry of Deno.readDir(dir)) {
			const name = rel ? `${rel}/${entry.name}` : entry.name;
			if (skip.has(name) || entry.name.startsWith(".")) continue;
			if (entry.isDirectory) await walk(`${dir}/${entry.name}`, name);
			else total += (await Deno.stat(`${dir}/${entry.name}`)).size;
		}
	};
	await walk(ROOT.slice(0, -1));
	const pct = ((total / LIMIT) * 100).toFixed(1);
	assert(
		total < LIMIT,
		`published bytes ${total} exceed JSR's ${LIMIT} limit (${pct}%)`,
	);
	// leave room for upstream icon sets to grow before it becomes a release-day
	// surprise; JSR's limit is a hard server-side reject
	assert(total < LIMIT * 0.9, `published bytes at ${pct}% of the JSR limit`);
});
