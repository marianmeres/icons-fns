export const iconLucideBatteryWarning = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M10 17h.01" /><path d="M10 7v6" /><path d="M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" /><path d="M22 11v2" /><path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /></svg>`;
}
