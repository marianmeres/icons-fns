/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="esnext" />
/**
 * Example app for `@marianmeres/icons-fns`.
 *
 * Ten icons from each of the 19 families, with the `size` / `strokeWidth` props
 * on live sliders and a click-through to the icon's import line and the exact
 * markup its function returns.
 *
 * It cannot `import` 19k icon modules (a bundler would inline every one), so
 * `scripts/gen-example-data.ts` bakes the sample into `icons.generated.ts` as
 * the four arguments the package's own `icon()` factory takes. The demo calls
 * that factory, so what it renders is byte-identical to what the published icon
 * function returns.
 *
 * Built with `@marianmeres/vanilla`: explicit reactive state (`observable`),
 * markup that lives in `<template>`s (`fromTemplate` / `refs`), and delegated
 * listener trees (`delegate`).
 *
 * This is browser code: the triple-slash lib references above type it against
 * the DOM (the repo's `deno.json` targets the Deno runtime for the library).
 *
 * Bundle with: `deno task example:build` (→ `example/dist/bundle.js`).
 */
import {
	createView,
	delegate,
	fromTemplate,
	observable,
	reactTo,
	refs,
} from "@marianmeres/vanilla";
import { icon } from "../../src/mod.ts";
import {
	type ExampleFamily,
	type ExampleIcon,
	FAMILIES,
	TOTAL_ICONS,
} from "./icons.generated.ts";
import { VERSION } from "./version.generated.ts";

/* ---- Config --------------------------------------------------------------- */

/** Must match the literal in the anti-FOUC inline script in index.html. */
const THEME_KEY = "icons-fns-example-theme";

/** The page's CSS `color`, which icons pick up through `currentColor`. */
const TONES = [
	{ key: "default", label: "Default", css: "var(--stuic-color-foreground)" },
	{ key: "accent", label: "Accent", css: "var(--stuic-color-accent)" },
	{ key: "success", label: "Success", css: "var(--stuic-color-success)" },
	{ key: "warning", label: "Warning", css: "var(--stuic-color-warning)" },
	{ key: "danger", label: "Danger", css: "var(--stuic-color-destructive)" },
] as const;

/* ---- State ---------------------------------------------------------------- */

const size = observable(32);
const strokeWidth = observable(2);
/** The icon whose detail dialog is open, or `null`. */
const detail = observable<{ family: ExampleFamily; icon: ExampleIcon } | null>(null);

/* ---- Rendering ------------------------------------------------------------ */

/**
 * The props the demo passes to every icon function.
 *
 * `strokeWidth` is dropped for the fill-based families (they ignore it, and
 * showing it in the copied snippet would be misleading), and Boxicons get an
 * explicit `fill` — their upstream SVGs carry none, so without it they render
 * black instead of inheriting the CSS `color`. `fill` is not one of the four
 * named props: it rides along on the renderer's attribute pass-through.
 */
function iconProps(family: ExampleFamily): Record<string, unknown> {
	const props: Record<string, unknown> = { size: size.get() };
	if (family.honorsStrokeWidth) props.strokeWidth = strokeWidth.get();
	if (!family.inheritsColor) props.fill = "currentColor";
	props["aria-hidden"] = "true";
	return props;
}

/** Renders one icon through the package's own `icon()` factory. */
function render(family: ExampleFamily, ico: ExampleIcon): string {
	return icon(ico.size, ico.strokeWidth, family.head, ico.rest)(iconProps(family));
}

const nf = new Intl.NumberFormat();
const fmt = (n: number): string => nf.format(n);

/* ---- Theme (page-level, class-based: matches the design-tokens `.dark`) ----
 * The class is set pre-paint by the inline script in index.html; this keeps it
 * and the browser chrome color (<meta name="theme-color">) in sync afterwards. */

const prefersDark = (): boolean =>
	globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;

const applyTheme = (dark: boolean): void => {
	const root = document.documentElement;
	root.classList.toggle("dark", dark);
	const bg = getComputedStyle(root).getPropertyValue("--stuic-color-background").trim();
	if (bg) {
		document.querySelector('meta[name="theme-color"]')?.setAttribute("content", bg);
	}
};

let isDark = (() => {
	const stored = localStorage.getItem(THEME_KEY);
	return stored ? stored === "dark" : prefersDark();
})();
applyTheme(isDark);

const toggleTheme = (): void => {
	isDark = !isDark;
	applyTheme(isDark);
	localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
};

/** Copies `text`, flashing the button's label so the click has feedback. */
async function copyToClipboard(button: HTMLElement, text: string): Promise<void> {
	const original = button.textContent;
	try {
		await navigator.clipboard.writeText(text);
		button.textContent = "Copied";
	} catch (err) {
		console.error(err);
		button.textContent = "Failed";
	}
	setTimeout(() => {
		button.textContent = original;
	}, 1200);
}

/* ---- Detail view (mounted into the page-level <dialog>) -------------------- */

const dialog = document.getElementById("detail-dialog") as HTMLDialogElement;

const detailView = createView((track) => {
	const el = fromTemplate("tpl-detail");
	const r = refs(el);

	/** The snippets currently on screen, so the copy buttons stay in sync. */
	const snippets = { import: "", call: "", markup: "" };

	track(reactTo([detail, size, strokeWidth], () => {
		const current = detail.get();
		if (!current) return;
		const { family, icon: ico } = current;

		const markup = render(family, ico);
		r.preview.innerHTML = markup;
		r.name.textContent = ico.name;
		r.meta.textContent = `${family.label} · ${family.family} · ${
			fmt(family.total)
		} icons`;

		// Boxicons are the one family that needs a prop to take the page color —
		// worth calling out, since it is also the clearest demo of pass-through.
		r.note.hidden = family.inheritsColor;
		if (!r.note.hidden) {
			r.note.textContent =
				"Boxicons ship without a fill attribute, so they render black " +
				"instead of inheriting the CSS color. Any prop that is not one of " +
				"the four named ones is emitted verbatim as an attribute — which is " +
				'why fill: "currentColor" is passed below.';
		}

		const args = Object.entries(iconProps(family))
			.map(([k, v]) =>
				`\t${/^[a-zA-Z_$][\w$]*$/.test(k) ? k : JSON.stringify(k)}: ${
					JSON.stringify(v)
				},`
			)
			.join("\n");

		snippets.import =
			`import { ${ico.name} } from "@marianmeres/icons-fns/${ico.path}";`;
		snippets.call = `const svg = ${ico.name}({\n${args}\n});`;
		snippets.markup = markup;

		r.import.textContent = snippets.import;
		r.call.textContent = snippets.call;
		r.markup.textContent = snippets.markup;
	}));

	track(delegate(el, {
		closeDetail: () => dialog.close(),
		copyImport: (_e, t) => copyToClipboard(t, snippets.import),
		copyCall: (_e, t) => copyToClipboard(t, snippets.call),
		copyMarkup: (_e, t) => copyToClipboard(t, snippets.markup),
	}));

	return { el };
});

dialog.appendChild(detailView.el!);
// Esc and backdrop clicks close natively; keep the observable in step.
dialog.addEventListener("close", () => detail.set(null));
dialog.addEventListener("click", (e) => {
	if (e.target === dialog) dialog.close();
});
detail.subscribe((current) => {
	if (current && !dialog.open) dialog.showModal();
	else if (!current && dialog.open) dialog.close();
});

/* ---- Main view ------------------------------------------------------------ */

const app = createView((track) => {
	const el = fromTemplate("tpl-app");
	const r = refs(el);

	/** Every rendered cell, in `data-idx` order. */
	const cells: { family: ExampleFamily; icon: ExampleIcon; host: HTMLElement }[] = [];

	for (const t of TONES) {
		const chip = fromTemplate("tpl-tone");
		const input = chip.querySelector("input") as HTMLInputElement;
		input.value = t.key;
		input.checked = t.key === TONES[0].key;
		chip.title = t.label;
		const swatch = refs(chip).swatch;
		swatch.style.color = t.css;
		swatch.setAttribute("aria-label", t.label);
		r.tones.appendChild(chip);
	}

	for (const family of FAMILIES) {
		const section = fromTemplate("tpl-family");
		const sr = refs(section);
		sr.label.textContent = family.label;
		sr.meta.textContent = `${family.prefix}* · ${family.icons.length} of ` +
			`${fmt(family.total)} icons`;

		for (const ico of family.icons) {
			const li = fromTemplate("tpl-cell");
			const cr = refs(li);
			const button = li.querySelector("button") as HTMLButtonElement;
			button.dataset.idx = String(cells.length);
			button.title = ico.name;
			cr.name.textContent = ico.name.slice(family.prefix.length);
			cells.push({ family, icon: ico, host: cr.icon });
			sr.icons.appendChild(li);
		}
		r.families.appendChild(section);
	}

	// rAF-scheduled: the sliders fire far faster than a frame.
	track(reactTo([size, strokeWidth], () => {
		el.style.setProperty("--cell", `${size.get()}px`);
		(r.sizeOut as HTMLOutputElement).value = String(size.get());
		(r.strokeOut as HTMLOutputElement).value = String(strokeWidth.get());
		for (const cell of cells) cell.host.innerHTML = render(cell.family, cell.icon);
	}, { scheduler: "raf" }));

	track(delegate(el, {
		setSize: (_e, t) => size.set(Number((t as HTMLInputElement).value)),
		setStroke: (_e, t) => strokeWidth.set(Number((t as HTMLInputElement).value)),
		setTone: (_e, t) => {
			const key = (t as HTMLInputElement).value;
			const css = TONES.find((x) => x.key === key)?.css ?? TONES[0].css;
			el.style.color = css;
			dialog.style.color = css; // the detail preview inherits from here
		},
		toggleTheme: () => toggleTheme(),
		openDetail: (_e, t) => {
			const cell = cells[Number(t.dataset.idx)];
			if (cell) detail.set({ family: cell.family, icon: cell.icon });
		},
	}));

	r.total.textContent = fmt(TOTAL_ICONS);
	r.version.textContent = `· v${VERSION}`;

	return { el };
});

document.getElementById("app")!.appendChild(app.el!);
