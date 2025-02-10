export const iconLucideShipWheel = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="8" /><path d="M12 2v7.5" /><path d="m19 5-5.23 5.23" /><path d="M22 12h-7.5" /><path d="m19 19-5.23-5.23" /><path d="M12 14.5V22" /><path d="M10.23 13.77 5 19" /><path d="M9.5 12H2" /><path d="M10.23 10.23 5 5" /><circle cx="12" cy="12" r="2.5" /></svg>`;
}
