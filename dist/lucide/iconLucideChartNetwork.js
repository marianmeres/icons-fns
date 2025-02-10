export const iconLucideChartNetwork = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="m13.11 7.664 1.78 2.672" /><path d="m14.162 12.788-3.324 1.424" /><path d="m20 4-6.06 1.515" /><path d="M3 3v16a2 2 0 0 0 2 2h16" /><circle cx="12" cy="6" r="2" /><circle cx="16" cy="12" r="2" /><circle cx="9" cy="15" r="2" /></svg>`;
}
