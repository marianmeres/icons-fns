/**
 * Props accepted by every icon function.
 *
 * The four named props are consumed by the renderer; any other key is emitted
 * verbatim as an attribute on the `<svg>` element, so
 * `{ "aria-hidden": "true" }` renders `aria-hidden="true"`.
 */
export interface IconProps extends Record<string, unknown> {
	/** Both `width` and `height`. Falls back to the icon's natural size. */
	size: number;
	/** The `class` attribute. Omitted entirely when falsy. */
	class: string;
	/** The `style` attribute. Omitted entirely when falsy. */
	style: string;
	/**
	 * The `stroke-width` attribute. Only honored by stroke-based families
	 * (Bytesize, Feather, Lucide); ignored everywhere else.
	 */
	strokeWidth: number;
}

/** The signature shared by every icon function in this package. */
export type IconFn = (props?: Partial<IconProps> | null) => string;

/** Props consumed by the renderer rather than passed through as attributes. */
const RESERVED = /^(?:class|size|style|strokeWidth)$/;

/**
 * Builds an icon function from the static parts extracted at build time.
 *
 * Every generated icon module is a single call to this factory. Hoisting the
 * renderer here instead of inlining it into each of the ~19k icon modules is
 * what keeps the package inside JSR's 20 MiB per-version budget.
 *
 * @param size Natural size of the icon, used when `props.size` is falsy.
 * @param strokeWidth Default `stroke-width`, or `null` to omit the attribute
 *   (and ignore `props.strokeWidth`) for fill-based families.
 * @param head Markup preceding `<svg`, i.e. a license comment or `""`.
 * @param rest Everything following the generated `<svg ` attributes, i.e. the
 *   icon's own attributes, body and closing tag.
 */
export function icon(
	size: number,
	strokeWidth: number | null,
	head: string,
	rest: string,
): IconFn {
	return (props) => {
		props ??= {};
		const { size: sz, class: cls, style, strokeWidth: sw } = props;
		const attrs = Object.entries(props)
			.filter(([k]) => !RESERVED.test(k))
			.map(([k, v]) => `${k}="${v}"`)
			.join(" ");
		return `${head}<svg ${style ? `style="${style}" ` : ""}${
			cls ? `class="${cls}" ` : ""
		}width="${sz || size}" height="${sz || size}" ${
			strokeWidth === null ? "" : `stroke-width="${sw ?? strokeWidth}" `
		}${attrs ? `${attrs} ` : ""}${rest}`;
	};
}
