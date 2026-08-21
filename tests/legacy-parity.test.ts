/**
 * Locks the rendered markup to what v5 produced.
 *
 * v6 hoisted the renderer out of every icon module into `icon()`. The fixture
 * was captured from the v5 `dist/` output before it was deleted, and covers the
 * families whose upstream SVG sources did not change in the same release — so
 * any difference here is the refactor's fault, not upstream's.
 */
import { assertEquals } from "@std/assert";
import { fromFileUrl } from "@std/path";

interface Fixture {
	path: string;
	export: string;
	cases: { props: Record<string, unknown> | null; svg: string }[];
}

const fixtures: Fixture[] = JSON.parse(
	await Deno.readTextFile(
		fromFileUrl(import.meta.resolve("./fixtures/v5-render.json")),
	),
);

Deno.test("fixture covers every unchanged family", () => {
	const dirs = new Set(fixtures.map((f) => f.path.slice(0, f.path.lastIndexOf("/"))));
	assertEquals(dirs.size, 15);
	assertEquals(fixtures.length, 60);
});

for (const fixture of fixtures) {
	Deno.test(`v5 parity: ${fixture.path}`, async () => {
		const mod = await import(`../src/${fixture.path}.ts`);
		const fn = mod[fixture.export] as (p?: unknown) => string;
		assertEquals(
			typeof fn,
			"function",
			`${fixture.path}.ts does not export ${fixture.export}`,
		);
		for (const { props, svg } of fixture.cases) {
			assertEquals(fn(props ?? undefined), svg, `props: ${JSON.stringify(props)}`);
		}
	});
}
