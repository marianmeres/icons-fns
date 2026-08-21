# @marianmeres/icons-fns

[![NPM](https://img.shields.io/npm/v/@marianmeres/icons-fns)](https://www.npmjs.com/package/@marianmeres/icons-fns)
[![JSR](https://jsr.io/badges/@marianmeres/icons-fns)](https://jsr.io/@marianmeres/icons-fns)
[![License](https://img.shields.io/npm/l/@marianmeres/icons-fns)](./LICENSE)

**19,199** icon SVGs from **8 providers**, wrapped as typed functions that return an SVG
string. No components, no runtime dependencies, no build step — call a function, get
markup.

```ts
iconLucideArrowUp({ size: 20, class: "text-red-500" });
// '<!-- @license lucide-static v1.33.0 - ISC --><svg class="text-red-500" width="20" ...'
```

Works in Deno, Node and browsers, and in any templating layer that can interpolate a
string — SvelteKit, Astro, JSX via `dangerouslySetInnerHTML`, plain string concatenation,
server-side HTML.

## Install

```shell
deno add jsr:@marianmeres/icons-fns
```

```shell
npm i @marianmeres/icons-fns
```

## One icon, one module

Every icon lives in its own module and is imported by its own subpath. There is no barrel
file and no index of 19k re-exports, so a bundler only ever sees the handful of icons you
actually reference — tree-shaking is automatic because there is nothing to prune.

```ts
import { iconHeroMiniAcademicCap } from "@marianmeres/icons-fns/heroicons/mini/iconHeroMiniAcademicCap";
```

The subpath is always `<family-directory>/<functionName>`, and the function name always
equals the file name. On npm the legacy `...AcademicCap.js` form works too, so paths
written against a previous release keep resolving.

## Basic Usage

```ts
import { iconHeroMiniAcademicCap } from "@marianmeres/icons-fns/heroicons/mini/iconHeroMiniAcademicCap";

const svg = iconHeroMiniAcademicCap({
	size: 32,
	class: "inline-block",
	style: "color: blue;",
	"data-testid": "cap",
});

// <svg style="color: blue;" class="inline-block" width="32" height="32"
//      data-testid="cap" viewBox="0 0 20 20" fill="currentColor" ...>...</svg>
```

Every icon function shares one signature:

```ts
type IconFn = (props?: Partial<IconProps> | null) => string;

interface IconProps extends Record<string, unknown> {
	size: number;
	class: string;
	style: string;
	strokeWidth: number;
}
```

| Prop            | Effect                                                                                         |
| --------------- | ---------------------------------------------------------------------------------------------- |
| `size`          | Sets both `width` and `height`. Falsy or omitted → the icon's natural size.                    |
| `class`         | The `class` attribute. Omitted entirely when falsy.                                            |
| `style`         | The `style` attribute. Omitted entirely when falsy.                                            |
| `strokeWidth`   | The `stroke-width` attribute. Honored only by the stroke families (Bytesize, Feather, Lucide). |
| _anything else_ | Emitted verbatim as an attribute: `{ "aria-hidden": "true" }` → `aria-hidden="true"`.          |

All functions are typed, so your IDE autocompletes by prefix:

![IDE typehint screenshot](https://raw.githubusercontent.com/marianmeres/icons-fns/master/screenshots/screenshot-IDE.png)

## API

The props above are the entire per-icon surface. [API.md](API.md) is the full reference —
the exact emitted markup, natural sizes and stroke-width defaults per family, the
`./search` functions and the MCP tool schemas.

## Families

Each provider/style pair is one directory with one function-name prefix.

| Provider                                                   | Directory              | Prefix            |      Icons |
| ---------------------------------------------------------- | ---------------------- | ----------------- | ---------: |
| [Bootstrap icons](https://icons.getbootstrap.com/)         | `bootstrap`            | `iconBs`          |      2,078 |
| [Boxicons](https://boxicons.com/)                          | `boxicons/regular`     | `iconBxRegular`   |        814 |
| [Boxicons](https://boxicons.com/)                          | `boxicons/solid`       | `iconBxSolid`     |        665 |
| [Bytesize icons](https://danklammer.com/bytesize-icons/) * | `bytesize`             | `iconBytesize`    |        101 |
| [Feather icons](https://feathericons.com/) *               | `feather`              | `iconFeather`     |        287 |
| [Font Awesome (Free)](https://fontawesome.com/icons)       | `font-awesome/regular` | `iconFaRegular`   |        273 |
| [Font Awesome (Free)](https://fontawesome.com/icons)       | `font-awesome/solid`   | `iconFaSolid`     |      1,996 |
| [Font Awesome (Free)](https://fontawesome.com/icons)       | `font-awesome/brands`  | `iconFaBrand`     |        609 |
| [Heroicons](https://heroicons.com/)                        | `heroicons/micro`      | `iconHeroMicro`   |        316 |
| [Heroicons](https://heroicons.com/)                        | `heroicons/mini`       | `iconHeroMini`    |        324 |
| [Heroicons](https://heroicons.com/)                        | `heroicons/outline`    | `iconHeroOutline` |        324 |
| [Heroicons](https://heroicons.com/)                        | `heroicons/solid`      | `iconHeroSolid`   |        324 |
| [Lucide icons](https://lucide.dev/) *                      | `lucide`               | `iconLucide`      |      2,016 |
| [Phosphor icons](https://phosphoricons.com/)               | `phosphor/bold`        | `iconPhBold`      |      1,512 |
| [Phosphor icons](https://phosphoricons.com/)               | `phosphor/duotone`     | `iconPhDuotone`   |      1,512 |
| [Phosphor icons](https://phosphoricons.com/)               | `phosphor/fill`        | `iconPhFill`      |      1,512 |
| [Phosphor icons](https://phosphoricons.com/)               | `phosphor/light`       | `iconPhLight`     |      1,512 |
| [Phosphor icons](https://phosphoricons.com/)               | `phosphor/regular`     | `iconPhRegular`   |      1,512 |
| [Phosphor icons](https://phosphoricons.com/)               | `phosphor/thin`        | `iconPhThin`      |      1,512 |
|                                                            |                        | **19 families**   | **19,199** |

<sub>* supports the `strokeWidth` prop</sub>

## Finding an icon

With ~19k names, the hard part is not rendering an icon but knowing what it is called. The
`./search` entry point is a separate import on purpose — it pulls in the name index, which
the icon modules themselves never touch.

```ts
import { listFamilyInfo, searchIcons } from "@marianmeres/icons-fns/search";

searchIcons("arrow up", { family: "lucide", limit: 3 });
// [
//   { name: "iconLucideAArrowUp",        family: "lucide", path: "lucide/iconLucideAArrowUp" },
//   { name: "iconLucideArrowUp",         family: "lucide", path: "lucide/iconLucideArrowUp" },
//   { name: "iconLucideBanknoteArrowUp", family: "lucide", path: "lucide/iconLucideBanknoteArrowUp" },
// ]

listFamilyInfo();
// [{ family: "bootstrap", prefix: "iconBs", count: 2078 }, ...]
```

| Export                         | Purpose                                                                                                                                                                       |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `searchIcons(query, options?)` | All terms must match the name, case-insensitively. Ranked by tier: names ending with the query first, then names containing it, then the rest — alphabetically within a tier. |
| `findIcon(name)`               | Exact, case-sensitive lookup. Returns `IconInfo` or `undefined`.                                                                                                              |
| `listIcons(family?)`           | Every icon, optionally restricted to one family.                                                                                                                              |
| `listFamilies()`               | The 19 family directory names.                                                                                                                                                |
| `listFamilyInfo()`             | Family + prefix + count.                                                                                                                                                      |

`options` is `{ family?: string; limit?: number }` — `limit` defaults to `50`, and `0`
means unlimited. `path` on an `IconInfo` is exactly the import subpath.

The root export (`@marianmeres/icons-fns`) carries no icons — only `IconProps`, `IconFn`
and `icon()`, the shared renderer every generated module is built from. You need it only
if you want to hand-roll an icon function with the same props contract.

## MCP tools

The repository carries an `mcp.ts` for [@marianmeres/mcp-server](https://jsr.io/@marianmeres/mcp-server),
so a coding agent can look an icon up instead of guessing a name that does not exist:

| Tool                 | Does                                                                            |
| -------------------- | ------------------------------------------------------------------------------- |
| `search-icons`       | Search by name; returns the export name plus the JSR and npm import specifiers. |
| `render-icon`        | Render one icon by exact name, with optional props, to preview the SVG.         |
| `list-icon-families` | List every family with its prefix, count and an example name.                   |

Point the server at a checkout of this repository and the tools register automatically.
`mcp.ts` is excluded from the published package, which keeps the release itself
dependency-free.

## Upgrading from v5

v6 is mostly a repackaging release: the same generator output, now published to **both JSR
and npm** from a Deno source tree. Most projects upgrade by changing nothing.

**Rendered markup is unchanged** for the six providers whose upstream sources did not move
(Bootstrap, Boxicons, Bytesize, Feather, Heroicons, Phosphor) — all 14,305 of those icons
emit byte-identical markup, pinned by a golden fixture captured from the v5 build (60
icons × 10 prop combinations).

What can actually break:

1. **Lucide upgraded 0.473.0 → 1.33.0.** 486 icons added, ~490 of the survivors redrawn,
   and 18 removed upstream — mostly brand logos, which Lucide moved out of the main set:
   `iconLucideChrome`, `iconLucideCodepen`, `iconLucideCodesandbox`, `iconLucideDribbble`,
   `iconLucideFacebook`, `iconLucideFigma`, `iconLucideFramer`, `iconLucideGithub`,
   `iconLucideGitlab`, `iconLucideInstagram`, `iconLucideLinkedin`, `iconLucidePocket`,
   `iconLucideRailSymbol`, `iconLucideSlack`, `iconLucideTrello`, `iconLucideTwitch`,
   `iconLucideTwitter`, `iconLucideYoutube`. Most have a `font-awesome/brands` equivalent
   (`iconFaBrandGithub`, `iconFaBrandSlack`, `iconFaBrandGetPocket`, …); Codesandbox,
   Framer and RailSymbol do not.

2. **Six subpaths changed spelling.** Upstream ships deprecated aliases next to canonical
   filenames (`eye-dropper.svg` beside `eyedropper.svg`), which normalize to names
   differing only in case. v5 wrote both and let them clobber each other on
   case-insensitive filesystems — so `iconFaSolidEyeDropper.js` actually exported
   `iconFaSolidEyedropper`, and importing the documented name got you `undefined`. The
   canonical spelling now wins and the file name always equals the export name.

   | v5 subpath              | v6 subpath              |
   | ----------------------- | ----------------------- |
   | `iconFaSolidEyeDropper` | `iconFaSolidEyedropper` |
   | `iconFaSolidTShirt`     | `iconFaSolidTshirt`     |
   | `iconLucideArrowDownAZ` | `iconLucideArrowDownAz` |
   | `iconLucideArrowDownZA` | `iconLucideArrowDownZa` |
   | `iconLucideArrowUpAZ`   | `iconLucideArrowUpAz`   |
   | `iconLucideArrowUpZA`   | `iconLucideArrowUpZa`   |

   For the two Font Awesome rows only the path moved — the exported name was already the
   v6 spelling. For the four Lucide rows both the path and the exported name changed. The
   icons themselves are identical; `deno task build` reports every collapsed alias.

3. **Extra props are no longer silently dropped.** v5 filtered them with
   `/^class|size|style|strokeWidth$/` — no parentheses, so it really meant "starts with
   `class`" or "contains `size`" or "contains `style`" or "ends with `strokeWidth`". Props
   like `className`, `data-size` and `stroke-style` vanished. They are now passed through
   as attributes, which is the documented behavior but new output if you were passing them.

4. **Font Awesome upgraded 7.1.0 → 7.3.1.** 77 icons added (60 brands, 17 solid), 24
   redrawn, none removed. Every Font Awesome icon shifts a little regardless: the embedded
   license comment now reads 7.3.1, and the new upstream files are pretty-printed, so
   collapsed line breaks leave a space before some self-closing tags. Snapshot tests over
   Font Awesome output will need re-recording; the rendered glyphs are the same.

Also new, and additive only:

- **`font-awesome/brands/*` is importable at last.** v5 generated those 549 modules but
  omitted the exports entry, so importing one threw `ERR_PACKAGE_PATH_NOT_EXPORTED`.
- **The root export works.** It used to be `null`. The dangling 1.5 MB `dist/index.d.ts`
  barrel is gone too — `package.json` pointed `types` at it while the root export was
  `null` and no matching `index.js` was ever built.
- **New `./search` entry point** and the MCP tools described above.

## Development

The icon modules and `src/_manifest.ts` are generated — edit `scripts/build.ts`, not them.
Only `src/_icon.ts`, `src/mod.ts` and `src/search.ts` are hand-written.

| Task                  | Does                                                                  |
| --------------------- | --------------------------------------------------------------------- |
| `deno task build`     | Regenerates `src/`, the search index and the `exports` map.           |
| `deno task test`      | Renderer contract, v5 golden parity, invariants over all 19k modules. |
| `deno task npm:build` | Builds the npm package into `.npm-dist`.                              |

`deno.json`'s `exports` map is generated with one entry per icon (19,201 in total,
including `.` and `./search`) because JSR forbids wildcard export keys; npm gets subpath
patterns instead — two per family, one for each specifier shape. Icon sources come from the
upstream npm packages listed in `deno.json` imports, except Font Awesome, which is vendored
under `vendor/` and excluded from the published package.

## Credits

All credit — and copyright — for the icons themselves belongs to their providers:

- [Bootstrap icons](https://icons.getbootstrap.com/)
- [Boxicons](https://boxicons.com/)
- [Bytesize icons](https://danklammer.com/bytesize-icons/)
- [Feather icons](https://feathericons.com/)
- [Font Awesome Icons (Free)](https://fontawesome.com/icons)
- [Heroicons](https://heroicons.com/)
- [Lucide icons](https://lucide.dev/)
- [Phosphor icons](https://phosphoricons.com/)

Thanks for the amazing work.

## Related

- [@marianmeres/emoji-fns](https://github.com/marianmeres/emoji-fns)

## License

The packaging code is [MIT](./LICENSE). The icons are **not** covered by it — each set
keeps its own license (MIT, ISC, CC BY 4.0, …) and its own attribution requirements. Check
the provider's terms before shipping, especially for Font Awesome brand marks and any
third-party logo.
