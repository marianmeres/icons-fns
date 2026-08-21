/**
 * Lookup helpers over the generated icon index.
 *
 * With ~19k icons spread across 19 families, the hard part is not rendering an
 * icon but finding its name. This module is a separate entry point on purpose —
 * importing it pulls in the index, which the icon modules themselves never need.
 *
 * ```ts
 * import { searchIcons } from "@marianmeres/icons-fns/search";
 *
 * searchIcons("arrow up", { family: "lucide", limit: 3 });
 * // [{ name: "iconLucideArrowUp", family: "lucide", path: "lucide/iconLucideArrowUp" }, ...]
 * ```
 */
import { MANIFEST } from "./_manifest.ts";

/** A single icon in the index. */
export interface IconInfo {
	/** Exported function name, e.g. `iconLucideArrowUp`. */
	name: string;
	/** Family directory, e.g. `lucide` or `phosphor/regular`. */
	family: string;
	/** Import subpath, e.g. `lucide/iconLucideArrowUp`. */
	path: string;
}

/** A family of icons from one provider, in one style. */
export interface IconFamilyInfo {
	/** Family directory, e.g. `phosphor/duotone`. */
	family: string;
	/** Prefix shared by every function name in the family, e.g. `iconPhDuotone`. */
	prefix: string;
	/** How many icons the family contains. */
	count: number;
}

/** Options for {@linkcode searchIcons}. */
export interface SearchIconsOptions {
	/** Restrict to one family, e.g. `lucide` or `heroicons/outline`. */
	family?: string;
	/** Maximum number of results. Defaults to 50; pass `0` for no limit. */
	limit?: number;
}

let parsed: IconInfo[] | null = null;
let families: IconFamilyInfo[] | null = null;

/** Parses the compact index on first use. */
function index(): IconInfo[] {
	if (parsed) return parsed;
	const icons: IconInfo[] = [];
	const dirs: IconFamilyInfo[] = [];
	for (const line of MANIFEST.split("\n")) {
		const [family, prefix, stems] = line.split("\t");
		const names = stems.split(",");
		dirs.push({ family, prefix, count: names.length });
		for (const stem of names) {
			const name = prefix + stem;
			icons.push({ name, family, path: `${family}/${name}` });
		}
	}
	parsed = icons;
	families = dirs;
	return icons;
}

/** Every family directory, in generation order. */
export function listFamilies(): string[] {
	index();
	return families!.map((f) => f.family);
}

/** Every family with its shared function-name prefix and icon count. */
export function listFamilyInfo(): IconFamilyInfo[] {
	index();
	return families!.map((f) => ({ ...f }));
}

/**
 * Every icon, optionally restricted to one family.
 *
 * @param family Family directory, e.g. `phosphor/thin`. Omit for all families.
 */
export function listIcons(family?: string): IconInfo[] {
	const all = index();
	return family === undefined ? [...all] : all.filter((i) => i.family === family);
}

/**
 * Looks up one icon by its exact function name.
 *
 * @param name e.g. `iconLucideArrowUp`. Matched case-sensitively.
 * @returns The icon, or `undefined` if no such name exists.
 */
export function findIcon(name: string): IconInfo | undefined {
	return index().find((i) => i.name === name);
}

/**
 * Finds icons whose name matches every whitespace-separated term in `query`,
 * case-insensitively.
 *
 * Results are ordered by how well they match: exact name matches first, then
 * names starting with the query, then the rest — each group alphabetically.
 * An empty query returns the first `limit` icons.
 *
 * @param query One or more terms, e.g. `"arrow up"` or `"ArrowUp"`.
 * @param options Family filter and result cap.
 */
export function searchIcons(
	query: string,
	options: SearchIconsOptions = {},
): IconInfo[] {
	const { family, limit = 50 } = options;
	const pool = listIcons(family);
	const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

	const scored: { icon: IconInfo; score: number }[] = [];
	const joined = terms.join("");
	for (const icon of pool) {
		const haystack = icon.name.toLowerCase();
		if (!terms.every((t) => haystack.includes(t))) continue;
		// prefix is `iconLucide`, so compare against the stem-ish tail too
		const stem = haystack.slice(haystack.length - joined.length);
		const score = stem === joined ? 0 : haystack.includes(joined) ? 1 : 2;
		scored.push({ icon, score });
	}

	scored.sort((a, b) =>
		a.score - b.score ||
		(a.icon.name < b.icon.name ? -1 : a.icon.name > b.icon.name ? 1 : 0)
	);

	const result = scored.map((s) => s.icon);
	return limit > 0 ? result.slice(0, limit) : result;
}
