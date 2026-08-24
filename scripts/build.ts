/**
 * Generates the icon modules under `src/`, the icon index used by `src/search.ts`,
 * and the `exports` map in `deno.json`.
 *
 * Run with: `deno task build`
 *
 * Icon SVGs come from the upstream npm packages listed in `deno.json` imports
 * (resolved into `node_modules/` by `deno install`), except Font Awesome which
 * is vendored under `vendor/` because the free icons are not distributed in a
 * convenient npm layout.
 */
import { emptyDir, ensureDir } from "@std/fs";
import { dirname, join, relative } from "@std/path";

/** One generated icon directory, built from one upstream SVG directory. */
interface Family {
	/** Where the source SVGs live, relative to the repo root. */
	indir: string;
	/** Output directory under `src/`, also the import subpath. */
	outdir: string;
	/** Prefix prepended to every generated function name. */
	fnPrefix: string;
	/** Forced natural size; when omitted it is derived from the `viewBox`. */
	size?: number;
	/** Whether `stroke-width` is exposed as a prop for this family. */
	allowStrokeWidth?: boolean;
	/** Normalizes an upstream filename before it becomes a function name. */
	transformName?: (name: string) => string;
	/** Human-readable family name, used in the generated doc comments. */
	label: string;
}

const FAMILIES: Family[] = [
	{
		indir: "node_modules/bootstrap-icons/icons",
		outdir: "bootstrap",
		fnPrefix: "iconBs",
		label: "Bootstrap",
	},
	{
		indir: "node_modules/heroicons/16/solid",
		outdir: "heroicons/micro",
		fnPrefix: "iconHeroMicro",
		label: "Heroicons micro",
	},
	{
		indir: "node_modules/heroicons/20/solid",
		outdir: "heroicons/mini",
		fnPrefix: "iconHeroMini",
		label: "Heroicons mini",
	},
	{
		indir: "node_modules/heroicons/24/outline",
		outdir: "heroicons/outline",
		fnPrefix: "iconHeroOutline",
		label: "Heroicons outline",
	},
	{
		indir: "node_modules/heroicons/24/solid",
		outdir: "heroicons/solid",
		fnPrefix: "iconHeroSolid",
		label: "Heroicons solid",
	},
	{
		indir: "node_modules/bytesize-icons/dist/icons",
		outdir: "bytesize",
		fnPrefix: "iconBytesize",
		allowStrokeWidth: true,
		label: "Bytesize",
	},
	{
		indir: "node_modules/feather-icons/dist/icons",
		outdir: "feather",
		fnPrefix: "iconFeather",
		allowStrokeWidth: true,
		label: "Feather",
	},
	{
		indir: "node_modules/boxicons/svg/regular",
		outdir: "boxicons/regular",
		fnPrefix: "iconBxRegular",
		transformName: (v) => v.replace(/^bx-/, ""),
		label: "Boxicons regular",
	},
	{
		indir: "node_modules/boxicons/svg/solid",
		outdir: "boxicons/solid",
		fnPrefix: "iconBxSolid",
		transformName: (v) => v.replace(/^bxs-/, ""),
		label: "Boxicons solid",
	},
	{
		indir: "vendor/font-awesome/7.3.1/regular",
		outdir: "font-awesome/regular",
		fnPrefix: "iconFaRegular",
		size: 24,
		label: "Font Awesome regular",
	},
	{
		indir: "vendor/font-awesome/7.3.1/solid",
		outdir: "font-awesome/solid",
		fnPrefix: "iconFaSolid",
		size: 24,
		label: "Font Awesome solid",
	},
	{
		indir: "vendor/font-awesome/7.3.1/brands",
		outdir: "font-awesome/brands",
		fnPrefix: "iconFaBrand",
		size: 24,
		label: "Font Awesome brands",
	},
	...(["bold", "duotone", "fill", "light", "regular", "thin"] as const).map(
		(variant): Family => ({
			indir: `node_modules/@phosphor-icons/core/assets/${variant}`,
			outdir: `phosphor/${variant}`,
			fnPrefix: `iconPh${variant[0].toUpperCase()}${variant.slice(1)}`,
			size: 16,
			transformName: (v) => v.replace(new RegExp(`-${variant}\\.svg$`), ".svg"),
			label: `Phosphor ${variant}`,
		}),
	),
	{
		indir: "node_modules/lucide-static/icons",
		outdir: "lucide",
		fnPrefix: "iconLucide",
		size: 16,
		allowStrokeWidth: true,
		label: "Lucide",
	},
];

/**
 * The exact template fragment the pre-6.0 generator spliced in after `<svg `.
 *
 * It is reproduced verbatim — including the whitespace — so that the transform
 * pipeline below sees byte-for-byte the same string the old generator saw. The
 * fragment is then split back out and its behavior is provided at runtime by
 * `icon()` instead of being inlined into every module. Reproducing it rather
 * than approximating it is what makes the generated markup identical to the
 * markup the previous major shipped.
 */
function legacyDynamicAttrs(
	size: number,
	allowStrokeWidth: boolean,
	strokeWidth: number | null,
): string {
	return [
		'${style ? `style="${style}" ` : ""}',
		'${cls ? `class="${cls}" ` : ""}',
		'width="${size || ' + size + '}" ',
		'height="${size || ' + size + '}" ',
		allowStrokeWidth ? 'stroke-width="${strokeWidth ?? ' + strokeWidth + '}" ' : "",
		'${attrs ? `${attrs} ` : ""}',
	].join("");
}

/** Upper-cases the first character. */
function ucFirst(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Turns `arrow-up-circle.svg` (sans extension) into `ArrowUpCircle`. */
function safeId(name: string): string {
	return name.split(/[/-]/).filter(Boolean).map(ucFirst).join("");
}

/** Escapes a string for embedding in a template literal. */
function escapeTemplate(str: string): string {
	return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

/** One generated icon, as needed by the exports map and the search index. */
interface GeneratedIcon {
	/** Exported function name, e.g. `iconLucideActivity`. */
	name: string;
	/** Name with the family prefix stripped, e.g. `Activity`. */
	stem: string;
	/** Upstream filename (post `transformName`), used to break name collisions. */
	file: string;
	/** The `icon(...)` call arguments — identical for two aliases of one icon. */
	payload: string;
	/** Family this icon belongs to, for the generated doc comment. */
	label: string;
	/** Relative specifier of the shared renderer. */
	helper: string;
}

/**
 * Renders the module source for a resolved icon.
 *
 * The leading module doc is not decoration: JSR records every entrypoint that
 * lacks one in the published version's `meta`, and with ~19k undocumented
 * entrypoints that field grew past Postgres' 8KB index row cap, wedging the
 * publish forever (jsr-io/jsr#1505). It also feeds the "all entrypoints
 * documented" component of the JSR score.
 */
function moduleSource(icon: GeneratedIcon): string {
	return `/**
 * ${icon.label} \`${icon.stem}\` icon.
 *
 * @module
 */
import { icon, type IconFn } from "${icon.helper}";

/** ${icon.label} \`${icon.stem}\` icon. */
export const ${icon.name}: IconFn = /* @__PURE__ */ icon(${icon.payload});
`;
}

/**
 * Picks which of two colliding names survives.
 *
 * Upstream packages ship deprecated aliases beside their canonical filenames
 * (`arrow-down-a-z.svg` next to `arrow-down-az.svg`, `eye-dropper.svg` next to
 * `eyedropper.svg`). Both normalize to the same function name — or to names
 * differing only in case, which a case-insensitive filesystem and JSR both
 * reject. The compact spelling is the canonical one in every observed case, so
 * prefer the filename with fewer segments, then the lexicographically smaller.
 */
function preferred(a: GeneratedIcon, b: GeneratedIcon): GeneratedIcon {
	const segments = (v: string) => v.split("-").length;
	if (segments(a.file) !== segments(b.file)) {
		return segments(a.file) < segments(b.file) ? a : b;
	}
	return a.file <= b.file ? a : b;
}

/** Recursively collects `*.svg` paths under `dir`, sorted for deterministic output. */
async function svgFiles(dir: string): Promise<string[]> {
	const out: string[] = [];
	const walk = async (current: string): Promise<void> => {
		for await (const entry of Deno.readDir(current)) {
			const path = join(current, entry.name);
			if (entry.isDirectory) await walk(path);
			else if (/\.svg$/i.test(entry.name)) out.push(path);
		}
	};
	await walk(dir);
	return out.sort();
}

/** Renders one icon module. Writing is deferred to {@linkcode main}. */
async function buildIcon(family: Family, absPath: string): Promise<GeneratedIcon> {
	let svg = (await Deno.readTextFile(absPath)).replace(/[\n\r]/g, " ");

	// natural size: forced by config, otherwise derived from the viewBox
	let size = family.size;
	const viewBox = /viewBox=['"](?<viewBox>[^"']+)['"]/.exec(svg);
	if (!size && viewBox?.groups?.viewBox) {
		const [, , w, h] = viewBox.groups.viewBox.split(" ");
		size = Math.max(Number(w), Number(h));
	}
	if (!size || !Number.isFinite(size)) {
		throw new Error(`Cannot determine size for ${absPath}`);
	}

	// stroke-width: lift the upstream value out into a prop default
	let strokeWidth: number | null = null;
	if (family.allowStrokeWidth) {
		const m = /stroke-width=['"](?<strokeWidth>[^"']+)['"]/.exec(svg);
		const raw = m?.groups?.strokeWidth;
		// an upstream icon in a stroke family with no stroke-width keeps the
		// attribute off entirely rather than emitting a bogus default
		if (raw !== undefined) strokeWidth = Number(raw);
		svg = svg.replace(/ stroke-width="[^"]+"/, "");
	}

	const dyn = legacyDynamicAttrs(size, !!family.allowStrokeWidth, strokeWidth);
	const marker = "<svg " + dyn;

	svg = svg
		.replaceAll(/\s/g, " ")
		.replace(' xmlns="http://www.w3.org/2000/svg"', "")
		.replace(/ class="[^"]+"/, "")
		.replace(/ width="[^"]+"/, "")
		.replace(/ height="[^"]+"/, "")
		// tricky, but currently holds for every source; may need revisiting if a
		// future upstream icon relies on referencing its own id (masks, gradients)
		.replace(/ id="[^"]+"/, "")
		.replace("<svg ", marker)
		.replace(/>\s+</g, "><")
		.replaceAll(/\s\s+/g, " ")
		.trim();

	const at = svg.indexOf(marker);
	if (at < 0) throw new Error(`Cannot locate the <svg> tag in ${absPath}`);
	const head = svg.slice(0, at);
	const rest = svg.slice(at + marker.length);

	let fileName = relative(family.indir, absPath);
	if (family.transformName) fileName = family.transformName(fileName);
	fileName = fileName.replace(/\.svg$/, "");
	const stem = safeId(fileName);

	return {
		name: family.fnPrefix + stem,
		stem,
		file: fileName,
		payload: `${size}, ${strokeWidth}, \`${escapeTemplate(head)}\`, \`${
			escapeTemplate(rest)
		}\``,
		label: family.label,
		helper: "../".repeat(family.outdir.split("/").length) + "_icon.ts",
	};
}

/** Generates everything, then rewrites `deno.json`'s exports map. */
async function main(): Promise<void> {
	const exportsMap: Record<string, string> = {
		".": "./src/mod.ts",
		"./search": "./src/search.ts",
	};
	const manifestLines: string[] = [];
	const aliasReport: string[] = [];
	let total = 0;

	for (const family of FAMILIES) {
		await emptyDir(join("src", family.outdir));
		const files = await svgFiles(family.indir);
		if (!files.length) throw new Error(`No SVGs found in ${family.indir}`);

		// Distinct upstream filenames can normalize to the same function name, or
		// to names differing only in case — which a case-insensitive filesystem
		// silently merges and JSR rejects outright. Keyed case-insensitively so
		// both land here. Identical markup means it is an upstream alias and one
		// of the two wins; differing markup is a real clash and is fatal.
		const resolved = new Map<string, GeneratedIcon>();
		const dropped: string[] = [];
		for (const file of files) {
			const generated = await buildIcon(family, file);
			const key = generated.name.toLowerCase();
			const previous = resolved.get(key);
			if (previous === undefined) {
				resolved.set(key, generated);
				continue;
			}
			if (previous.payload !== generated.payload) {
				throw new Error(
					`Name clash in ${family.indir}: "${previous.file}" and ` +
						`"${generated.file}" both map to ${generated.name} but render ` +
						`different markup`,
				);
			}
			const winner = preferred(previous, generated);
			const loser = winner === previous ? generated : previous;
			resolved.set(key, winner);
			dropped.push(`${loser.file}.svg -> ${winner.name}`);
		}

		const icons = [...resolved.values()].sort((a, b) =>
			a.name < b.name ? -1 : a.name > b.name ? 1 : 0
		);
		for (const generated of icons) {
			const outPath = join("src", family.outdir, `${generated.name}.ts`);
			await ensureDir(dirname(outPath));
			await Deno.writeTextFile(outPath, moduleSource(generated));
			exportsMap[`./${family.outdir}/${generated.name}`] =
				`./src/${family.outdir}/${generated.name}.ts`;
		}
		if (dropped.length) aliasReport.push(`${family.outdir}: ${dropped.join(", ")}`);
		manifestLines.push(
			[family.outdir, family.fnPrefix, icons.map((i) => i.stem).join(",")].join(
				"\t",
			),
		);
		total += icons.length;
		console.log(
			`%c  ✔ ${family.outdir}%c ${icons.length}`,
			"color: green",
			"color: gray",
		);
	}

	// the search index — one line per family, kept compact because every byte
	// counts against JSR's 20 MiB per-version budget
	await Deno.writeTextFile(
		"src/_manifest.ts",
		`// Generated by scripts/build.ts — do not edit.\n\n` +
			`/** One line per family: \`outdir\\tfnPrefix\\tstem,stem,...\`. */\n` +
			`export const MANIFEST: string = \`${manifestLines.join("\n")}\`;\n`,
	);

	const denoJson = JSON.parse(await Deno.readTextFile("deno.json"));
	denoJson.exports = exportsMap;
	await Deno.writeTextFile("deno.json", JSON.stringify(denoJson, null, "\t") + "\n");

	if (aliasReport.length) {
		console.log("%c\nUpstream aliases collapsed:", "color: yellow");
		for (const line of aliasReport) console.log(`%c  ${line}`, "color: gray");
	}
	console.log(
		`%c\nDone — ${total} icons, ${Object.keys(exportsMap).length} exports\n`,
		"color: cyan",
	);
}

if (import.meta.main) await main();
