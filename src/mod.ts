/**
 * Icon SVGs from eight providers, wrapped as functions returning an SVG string.
 *
 * Every icon lives in its own module and is imported by its own subpath, so a
 * bundler only ever sees the icons you actually reference:
 *
 * ```ts
 * import { iconHeroMiniAcademicCap } from "@marianmeres/icons-fns/heroicons/mini/iconHeroMiniAcademicCap";
 *
 * iconHeroMiniAcademicCap({ class: "inline-block", size: 32 });
 * ```
 *
 * This root module deliberately carries no icons — only the shared types and
 * the renderer they are built from. To discover icon names at runtime, import
 * `@marianmeres/icons-fns/search`.
 *
 * @module
 */
export { icon, type IconFn, type IconProps } from "./_icon.ts";
