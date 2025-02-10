export const iconLucideHaze = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="m5.2 6.2 1.4 1.4" /><path d="M2 13h2" /><path d="M20 13h2" /><path d="m17.4 7.6 1.4-1.4" /><path d="M22 17H2" /><path d="M22 21H2" /><path d="M16 13a4 4 0 0 0-8 0" /><path d="M12 5V2.5" /></svg>`;
}
