import { assert, assertEquals, assertStringIncludes } from "@std/assert";
import { icon } from "../src/_icon.ts";

const plain = icon(16, null, "", `viewBox="0 0 16 16"><path d="M0 0"/></svg>`);
const stroked = icon(24, 2, "", `viewBox="0 0 24 24"><path d="M0 0"/></svg>`);
const commented = icon(16, null, "<!-- @license X -->", `viewBox="0 0 16 16"></svg>`);

Deno.test("renders natural size when no size given", () => {
	assertStringIncludes(plain(), `width="16" height="16"`);
	assertStringIncludes(stroked(), `width="24" height="24"`);
});

Deno.test("size prop overrides the natural size", () => {
	assertStringIncludes(plain({ size: 48 }), `width="48" height="48"`);
});

Deno.test("falsy size falls back to the natural size", () => {
	// `size: 0` is meaningless for an icon, so it behaves as "unset"
	assertStringIncludes(plain({ size: 0 }), `width="16" height="16"`);
});

Deno.test("accepts undefined and null as props", () => {
	assertEquals(plain(), plain(undefined));
	assertEquals(plain(), plain(null));
	assertEquals(plain(), plain({}));
});

Deno.test("class and style are omitted entirely when absent or falsy", () => {
	assert(!plain().includes("class="));
	assert(!plain().includes("style="));
	assert(!plain({ class: "", style: "" }).includes("class="));
});

Deno.test("class and style are rendered when given", () => {
	assertStringIncludes(plain({ class: "a b" }), `class="a b"`);
	assertStringIncludes(plain({ style: "color: red" }), `style="color: red"`);
});

Deno.test("style precedes class, both precede width", () => {
	const svg = plain({ class: "c", style: "s" });
	assert(svg.indexOf("style=") < svg.indexOf("class="));
	assert(svg.indexOf("class=") < svg.indexOf("width="));
});

Deno.test("stroke-width is emitted only for stroke families", () => {
	assertStringIncludes(stroked(), `stroke-width="2"`);
	assert(!plain().includes("stroke-width="));
});

Deno.test("strokeWidth prop overrides the family default", () => {
	assertStringIncludes(stroked({ strokeWidth: 5 }), `stroke-width="5"`);
	// unlike size, 0 is a meaningful stroke width and must survive
	assertStringIncludes(stroked({ strokeWidth: 0 }), `stroke-width="0"`);
});

Deno.test("strokeWidth is ignored by fill families", () => {
	assert(!plain({ strokeWidth: 5 }).includes("stroke-width="));
});

Deno.test("unknown props are passed through as attributes", () => {
	const svg = plain({ "aria-hidden": "true", "data-testid": "x" });
	assertStringIncludes(svg, `aria-hidden="true"`);
	assertStringIncludes(svg, `data-testid="x"`);
});

Deno.test("only the four reserved props are withheld from attributes", () => {
	const svg = plain({ class: "c", size: 1, style: "s", strokeWidth: 1 });
	assert(!svg.includes("size="));
	assert(!svg.includes("strokeWidth="));
});

Deno.test("props that merely contain a reserved word still pass through", () => {
	// v5 used an unanchored regex, so these were silently dropped
	const svg = plain({ className: "c", "data-size": "1", "stroke-style": "s" });
	assertStringIncludes(svg, `className="c"`);
	assertStringIncludes(svg, `data-size="1"`);
	assertStringIncludes(svg, `stroke-style="s"`);
});

Deno.test("head markup precedes the svg element", () => {
	assert(commented().startsWith("<!-- @license X --><svg "));
});

Deno.test("calling twice does not mutate shared state", () => {
	assertEquals(plain({ class: "a" }), plain({ class: "a" }));
	assertEquals(plain(), plain());
});
