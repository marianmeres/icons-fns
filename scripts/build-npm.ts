/**
 * Builds the npm package into `.npm-dist`.
 *
 * Run with: `deno task npm:build` (which regenerates `src/` first).
 *
 * JSR needs every icon enumerated in `deno.json`, but npm supports subpath
 * patterns — so the ~19k explicit exports collapse to two wildcard entries per
 * family here. Both an extension-ful and an extension-less form is emitted:
 * `.js` is what every published version so far has used and what existing
 * consumers import, while the bare form matches the JSR specifier, so the same
 * import path works on both registries.
 */
import { npmBuild } from "@marianmeres/npmbuild";

const denoJson = JSON.parse(Deno.readTextFileSync("deno.json"));

/** Family directories, derived from the generated exports map so they cannot drift. */
const families = [
	...new Set(
		Object.keys(denoJson.exports as Record<string, string>)
			.filter((key) => key.startsWith("./") && key !== "./search")
			.map((key) => key.slice(2, key.lastIndexOf("/"))),
	),
].sort();

const iconExports: Record<string, { types: string; import: string }> = {};
for (const family of families) {
	const target = { types: `./dist/${family}/*.d.ts`, import: `./dist/${family}/*.js` };
	iconExports[`./${family}/*.js`] = target;
	iconExports[`./${family}/*`] = target;
}
iconExports["./search"] = { types: "./dist/search.d.ts", import: "./dist/search.js" };

const { outDir, packageJson } = await npmBuild({
	name: denoJson.name,
	version: denoJson.version,
	repository: denoJson.name.replace(/^@/, ""),
	// `.` only — every icon subpath comes from the wildcards below
	entryPoints: ["mod"],
	packageJsonOverrides: {
		description: "Icon svgs wrapped as functions.",
		keywords: [
			"icons",
			"svg",
			"bootstrap-icons",
			"boxicons",
			"bytesize-icons",
			"feather-icons",
			"font-awesome",
			"heroicons",
			"lucide",
			"phosphor-icons",
		],
		exports: iconExports,
	},
});

console.log(
	`%c\nnpm package ready in ${outDir} — ${
		Object.keys(packageJson.exports as object).length
	} export entries, ${families.length} families\n`,
	"color: cyan",
);
