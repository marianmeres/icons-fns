/**
 * Picks a handful of icons per family for the example app and writes them to
 * `example/src/icons.generated.ts`.
 *
 * Run with: `deno task example:data` — after `deno task build`, or after
 * touching the picks below.
 *
 * The example cannot import 19k icon modules (a bundler would inline all of
 * them), so it renders a small sample instead: {@linkcode PER_FAMILY} icons from
 * each of the 19 families. What is baked in is the four `icon(...)` arguments,
 * lifted back out of the generated modules — the demo feeds them through the
 * package's own `icon()` factory, so every SVG it shows is byte-identical to
 * what the published function returns.
 *
 * The lift is a text parse of a shape `scripts/build.ts` owns:
 *
 *     export const iconLucideHouse: IconFn = ... icon(16, 2, `head`, `rest`);
 *
 * so every picked icon is re-rendered through its real module and compared
 * before anything is written.
 */
import { listFamilyInfo, listIcons } from "../src/search.ts";
import { icon } from "../src/mod.ts";

/** How many icons to show per family. */
const PER_FAMILY = 10;

/**
 * The order the families appear in on the page.
 *
 * Defaults to the package's own generation order — `FAMILIES` in
 * `scripts/build.ts`, which is what `listFamilyInfo()` reports. **Reorder this
 * list to reorder the page**, then re-run `deno task example:data`; nothing else
 * needs touching, and `scripts/build.ts` is deliberately left alone because the
 * order it produces is observable through the public `./search` API.
 *
 * A family left out of this list lands at the end, in generation order — so a
 * newly added family shows up without anyone having to remember this file. A
 * name in the list that no longer exists is a typo and fails the build.
 */
const FAMILY_ORDER: string[] = [
	"lucide",
	"feather",
	"bytesize",
	"bootstrap",
	"heroicons/solid",
	"heroicons/micro",
	"heroicons/mini",
	"heroicons/outline",
	"boxicons/regular",
	"boxicons/solid",
	"font-awesome/regular",
	"font-awesome/solid",
	"font-awesome/brands",
	"phosphor/bold",
	"phosphor/duotone",
	"phosphor/fill",
	"phosphor/light",
	"phosphor/regular",
	"phosphor/thin",
];

/**
 * Concepts to look for, best spelling first — the first ten that hit become the
 * family's sample, so the same idea lands in the same column across families.
 * Providers name things differently (`House` / `Home`, `Gear` / `Cog6Tooth`),
 * hence the alternatives; a family missing one falls through to the next group.
 */
const CONCEPTS: string[][] = [
	["House", "Home", "HomeAlt"],
	["Person", "PersonFill", "User", "UserCircle"],
	["Search", "SearchAlt", "MagnifyingGlass"],
	["Heart", "HeartFill"],
	["Star", "StarFill"],
	["Gear", "GearFill", "Cog6Tooth", "Cog", "Settings"],
	["Trash", "TrashFill", "Trash2", "TrashSimple"],
	["Calendar", "CalendarFill", "CalendarDays", "CalendarBlank"],
	["Envelope", "EnvelopeFill", "EnvelopeSimple", "Mail"],
	["Bell", "BellFill"],
	// backups, for the families that are missing one of the ten above
	["Camera", "CameraFill"],
	["Cloud", "CloudFill"],
	["Lock", "LockFill", "LockClosed", "LockKey"],
	["File", "FileFill", "FileEarmark", "FileText"],
	["Check", "CheckLg", "CheckCircle"],
	["ArrowRight", "ArrowRightShort"],
];

/** Font Awesome brands has no everyday icons at all — it is logos end to end. */
const BRAND_CONCEPTS: string[][] = [
	["Github"],
	["Apple"],
	["Google"],
	["XTwitter"],
	["Linkedin"],
	["Youtube"],
	["Npm"],
	["Docker"],
	["Figma"],
	["Rust"],
];

/** The single-line form every generated icon module has. */
const MODULE_RE =
	/\/\*\* (?<label>.+?) `.+?` icon\. \*\/\s*export const \w+: IconFn = \/\* @__PURE__ \*\/ icon\((?<size>[\d.]+), (?<strokeWidth>[\d.]+|null), `(?<head>(?:[^`\\]|\\[\s\S])*)`, `(?<rest>(?:[^`\\]|\\[\s\S])*)`\);/;

/** Inverse of `escapeTemplate` in `scripts/build.ts` (it escapes `\`, `` ` ``, `$`). */
const unescapeTemplate = (str: string): string => str.replace(/\\([\s\S])/g, "$1");

/** One icon, as lifted out of its module. */
interface Picked {
	name: string;
	path: string;
	label: string;
	size: number;
	strokeWidth: number | null;
	head: string;
	rest: string;
}

/** Reads and parses one generated icon module. */
async function lift(family: string, name: string): Promise<Picked> {
	const path = `${family}/${name}`;
	const src = await Deno.readTextFile(`src/${path}.ts`);
	const g = MODULE_RE.exec(src)?.groups;
	if (!g) throw new Error(`Unrecognized module shape: src/${path}.ts`);
	return {
		name,
		path,
		label: g.label,
		size: Number(g.size),
		strokeWidth: g.strokeWidth === "null" ? null : Number(g.strokeWidth),
		head: unescapeTemplate(g.head),
		rest: unescapeTemplate(g.rest),
	};
}

/**
 * Chooses this family's sample: the concept list first, then evenly spaced
 * across whatever is left, so a family that matches nothing still gets a
 * varied ten rather than ten consecutive `Alarm*`s.
 */
function choose(stems: string[], concepts: string[][]): string[] {
	const available = new Set(stems);
	const chosen: string[] = [];

	for (const group of concepts) {
		if (chosen.length === PER_FAMILY) break;
		const hit = group.find((c) => available.has(c));
		if (hit) {
			chosen.push(hit);
			available.delete(hit);
		}
	}

	const rest = stems.filter((s) => available.has(s));
	const step = Math.max(1, Math.floor(rest.length / PER_FAMILY));
	for (let i = 0; chosen.length < PER_FAMILY && i < rest.length; i += step) {
		chosen.push(rest[i]);
	}
	return chosen;
}

/** Renders `example/src/icons.generated.ts`. */
function source(families: unknown[], total: number): string {
	return `// AUTO-GENERATED by scripts/gen-example-data.ts — do not edit.

/** One sampled icon: the four \`icon(...)\` arguments, plus how to import it. */
export interface ExampleIcon {
	/** Exported function name, e.g. \`iconLucideHouse\`. */
	name: string;
	/** Import subpath, e.g. \`lucide/iconLucideHouse\`. */
	path: string;
	/** The icon's natural size, used when no \`size\` prop is passed. */
	size: number;
	/** Default \`stroke-width\`, or \`null\` for fill-based families. */
	strokeWidth: number | null;
	/** Everything following the generated \`<svg \` attributes. */
	rest: string;
}

/** One family, with a sample of its icons. */
export interface ExampleFamily {
	/** Family directory, e.g. \`phosphor/duotone\`. */
	family: string;
	/** Human-readable name, e.g. \`Phosphor duotone\`. */
	label: string;
	/** Prefix shared by every function name in the family. */
	prefix: string;
	/** How many icons the family actually has. */
	total: number;
	/** Markup preceding \`<svg\`, i.e. the upstream license comment. */
	head: string;
	/** Whether the family honors the \`strokeWidth\` prop. */
	honorsStrokeWidth: boolean;
	/**
	 * Whether the family's markup paints with \`currentColor\`. Boxicons ship
	 * without a \`fill\`, so they need one passed in as a prop to take the
	 * surrounding CSS \`color\`.
	 */
	inheritsColor: boolean;
	icons: ExampleIcon[];
}

/** Every family, in the package's own order. */
export const FAMILIES: ExampleFamily[] = ${JSON.stringify(families, null, "\t")};

/** How many icons the package ships in total. */
export const TOTAL_ICONS = ${total};
`;
}

/** Applies {@linkcode FAMILY_ORDER}; unlisted families keep generation order, last. */
function ordered<T extends { family: string }>(all: T[]): T[] {
	const unknown = FAMILY_ORDER.filter((f) => !all.some((a) => a.family === f));
	if (unknown.length) {
		throw new Error(`FAMILY_ORDER names no such family: ${unknown.join(", ")}`);
	}
	const rank = (f: string) => {
		const i = FAMILY_ORDER.indexOf(f);
		return i === -1 ? FAMILY_ORDER.length : i;
	};
	// sort is stable, so the unlisted tail stays in generation order
	return [...all].sort((a, b) => rank(a.family) - rank(b.family));
}

async function main(): Promise<void> {
	const families = [];
	let total = 0;
	let checked = 0;

	for (const { family, prefix, count } of ordered(listFamilyInfo())) {
		const stems = listIcons(family).map((i) => i.name.slice(prefix.length));
		const concepts = family === "font-awesome/brands" ? BRAND_CONCEPTS : CONCEPTS;
		const picked = await Promise.all(
			choose(stems, concepts).map((stem) => lift(family, prefix + stem)),
		);
		if (picked.length !== PER_FAMILY) {
			throw new Error(`${family}: picked ${picked.length}, want ${PER_FAMILY}`);
		}

		// The parse above is a text parse; this is what proves it reproduces the
		// package byte for byte.
		for (const p of picked) {
			const mod = await import(`../src/${p.path}.ts`);
			const expected = (mod[p.name] as () => string)();
			const actual = icon(p.size, p.strokeWidth, p.head, p.rest)();
			if (actual !== expected) {
				throw new Error(
					`${p.name} does not round-trip\n  expected: ${expected}\n  actual:   ${actual}`,
				);
			}
			checked++;
		}

		const heads = new Set(picked.map((p) => p.head));
		if (heads.size !== 1) {
			throw new Error(`${family}: expected one shared head, got ${heads.size}`);
		}

		families.push({
			family,
			label: picked[0].label,
			prefix,
			total: count,
			head: picked[0].head,
			honorsStrokeWidth: picked.some((p) => p.strokeWidth !== null),
			inheritsColor: picked.every((p) => /currentcolor/i.test(p.rest)),
			icons: picked.map(({ name, path, size, strokeWidth, rest }) => ({
				name,
				path,
				size,
				strokeWidth,
				rest,
			})),
		});
		total += count;
		console.log(
			`%c  ✔ ${family.padEnd(22)}%c ${
				picked
					.map((p) => p.name.slice(prefix.length))
					.join(", ")
			}`,
			"color: green",
			"color: gray",
		);
	}

	const out = "example/src/icons.generated.ts";
	await Deno.writeTextFile(out, source(families, total));
	// Formatted here rather than hand-wrapped above, so the file the generator
	// writes is byte-identical to what `deno fmt` would leave behind.
	await new Deno.Command(Deno.execPath(), {
		args: ["fmt", "-q", out],
	}).output();

	const bytes = (await Deno.stat(out)).size;
	console.log(
		`%c\n${out} → ${families.length} families × ${PER_FAMILY} icons, ${
			(
				bytes / 1024
			).toFixed(0)
		} KB, all ${checked} verified against the real modules\n`,
		"color: cyan",
	);
}

if (import.meta.main) await main();
