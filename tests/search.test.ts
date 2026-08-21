import { assert, assertEquals } from "@std/assert";
import { listFamilies, listIcons, searchIcons } from "../src/search.ts";

Deno.test("lists every family", () => {
	const families = listFamilies();
	assertEquals(families.length, 19);
	assert(families.includes("lucide"));
	assert(families.includes("phosphor/thin"));
	assert(families.includes("font-awesome/brands"));
});

Deno.test("lists every icon", () => {
	assert(listIcons().length > 19_000);
});

Deno.test("filters by family", () => {
	const lucide = listIcons("lucide");
	assert(lucide.length > 2000);
	assert(lucide.every((i) => i.family === "lucide"));
	assert(lucide.every((i) => i.name.startsWith("iconLucide")));
});

Deno.test("unknown family yields nothing", () => {
	assertEquals(listIcons("nope"), []);
});

Deno.test("path is the import subpath", () => {
	const [first] = listIcons("bytesize");
	assertEquals(first.path, `bytesize/${first.name}`);
});

Deno.test("finds an icon by its stem", () => {
	const hits = searchIcons("activity", { family: "lucide" });
	assertEquals(hits[0].name, "iconLucideActivity");
});

Deno.test("matches all whitespace-separated terms", () => {
	const hits = searchIcons("arrow up", { family: "lucide", limit: 0 });
	assert(hits.length > 0);
	assert(hits.every((i) => /arrow/i.test(i.name) && /up/i.test(i.name)));
});

Deno.test("is case insensitive", () => {
	assertEquals(
		searchIcons("ARROWUP", { family: "lucide", limit: 5 }),
		searchIcons("arrowup", { family: "lucide", limit: 5 }),
	);
});

Deno.test("ranks the exact match first", () => {
	assertEquals(searchIcons("clock", { family: "feather" })[0].name, "iconFeatherClock");
});

Deno.test("honors the limit, and 0 means unlimited", () => {
	assertEquals(searchIcons("a", { limit: 3 }).length, 3);
	assert(searchIcons("a", { limit: 0 }).length > 3);
});

Deno.test("empty query returns results rather than throwing", () => {
	assertEquals(searchIcons("", { limit: 5 }).length, 5);
});

Deno.test("no match yields an empty list", () => {
	assertEquals(searchIcons("zzzznotanicon"), []);
});

Deno.test("searches across families when unfiltered", () => {
	const families = new Set(searchIcons("clock", { limit: 0 }).map((i) => i.family));
	assert(families.size > 5);
});
