// The MCP server loads this file from outside this package's import map, so the
// specifiers below must be self-contained and fully versioned.
// deno-lint-ignore-file no-import-prefix

import { z } from "npm:zod@^3.25.76";
import type { McpToolDefinition } from "jsr:@marianmeres/mcp-server@^1.3.2/types";
import {
	findIcon,
	listFamilies,
	listFamilyInfo,
	listIcons,
	searchIcons,
} from "./src/search.ts";
import type { IconFn, IconProps } from "./src/mod.ts";

const PACKAGE = "@marianmeres/icons-fns";

/** Both specifier shapes, since the package is published to JSR and npm. */
function specifiers(path: string): { jsr: string; npm: string } {
	return { jsr: `${PACKAGE}/${path}`, npm: `${PACKAGE}/${path}.js` };
}

/**
 * Best-effort "did you mean" for a name that does not exist, by splitting it on
 * camel-case boundaries and dropping trailing terms until something matches.
 */
function suggest(name: string): string[] {
	const terms = name
		.replace(/^icon/, "")
		.replace(/([a-z0-9])([A-Z])/g, "$1 $2")
		.split(" ")
		.filter(Boolean);
	for (let take = terms.length; take > 0; take--) {
		const hits = searchIcons(terms.slice(0, take).join(" "), { limit: 5 });
		if (hits.length) return hits.map((i) => i.name);
	}
	return [];
}

/** Loads one icon module by its function name. */
async function load(name: string): Promise<IconFn | null> {
	const info = findIcon(name);
	if (!info) return null;
	const mod = await import(import.meta.resolve(`./src/${info.path}.ts`));
	return (mod as Record<string, IconFn>)[name] ?? null;
}

export const tools: McpToolDefinition[] = [
	{
		name: "search-icons",
		description: "Search ~19k icon functions by name across Bootstrap, Boxicons, " +
			"Bytesize, Feather, Font Awesome, Heroicons, Lucide and Phosphor. " +
			"Use this to find the exact export name and import specifier for an " +
			"icon before writing code — e.g. 'arrow up', 'trash', 'user circle'. " +
			"Returns the function name, its family, and the import specifier for " +
			"both JSR and npm",
		params: {
			query: z
				.string()
				.describe(
					'One or more terms matched against the icon name, e.g. "arrow up" ' +
						'or "shopping cart". All terms must match',
				),
			family: z
				.string()
				.optional()
				.describe(
					'Restrict to one family directory, e.g. "lucide", ' +
						'"heroicons/outline", "phosphor/duotone", "font-awesome/brands". ' +
						"Call list-icon-families for the full list",
				),
			limit: z
				.number()
				.optional()
				.describe("Maximum results (default 25)"),
		},
		// deno-lint-ignore require-await -- the tool signature is async
		handler: async (params) => {
			const { query, family, limit } = params as {
				query: string;
				family?: string;
				limit?: number;
			};
			if (family !== undefined && !listFamilies().includes(family)) {
				return JSON.stringify(
					{
						error: `Unknown family: ${family}`,
						families: listFamilies(),
					},
					null,
					2,
				);
			}
			const hits = searchIcons(query, { family, limit: limit ?? 25 });
			return JSON.stringify(
				{
					count: hits.length,
					icons: hits.map((i) => ({
						name: i.name,
						family: i.family,
						...specifiers(i.path),
					})),
				},
				null,
				2,
			);
		},
	},
	{
		name: "render-icon",
		description: "Render one icon to its SVG string by its exact function name (as " +
			"returned by search-icons), optionally with size, class, style and " +
			"stroke-width applied. Use this to preview what an icon actually " +
			"emits before adding it to a project",
		params: {
			name: z
				.string()
				.describe('Exact icon function name, e.g. "iconLucideArrowUp"'),
			size: z
				.number()
				.optional()
				.describe("Width and height in px; defaults to the icon's natural size"),
			class: z.string().optional().describe("Value for the class attribute"),
			style: z.string().optional().describe("Value for the style attribute"),
			strokeWidth: z
				.number()
				.optional()
				.describe(
					"Value for stroke-width; honored only by the Bytesize, Feather " +
						"and Lucide families",
				),
		},
		handler: async (params) => {
			const { name, ...props } = params as { name: string } & Partial<IconProps>;
			const fn = await load(name);
			if (!fn) {
				return JSON.stringify(
					{
						error: `No icon named ${name}`,
						didYouMean: suggest(name),
					},
					null,
					2,
				);
			}
			const info = findIcon(name)!;
			return JSON.stringify(
				{
					name,
					family: info.family,
					...specifiers(info.path),
					svg: fn(props),
				},
				null,
				2,
			);
		},
	},
	{
		name: "list-icon-families",
		description:
			"List every icon family directory in @marianmeres/icons-fns with its " +
			"icon count and function-name prefix. Use this to discover valid " +
			"values for the search-icons family filter, or to see which style " +
			"variants (outline, solid, duotone, ...) a provider offers",
		params: {},
		// deno-lint-ignore require-await -- the tool signature is async
		handler: async () => {
			const families = listFamilyInfo().map((info) => ({
				...info,
				example: listIcons(info.family)[0]?.name ?? "",
			}));
			return JSON.stringify(
				{
					total: families.reduce((sum, f) => sum + f.count, 0),
					families,
				},
				null,
				2,
			);
		},
	},
];
