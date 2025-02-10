export const iconLucideShowerHead = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="m4 4 2.5 2.5" /><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" /><path d="M15 5 5 15" /><path d="M14 17v.01" /><path d="M10 16v.01" /><path d="M13 13v.01" /><path d="M16 10v.01" /><path d="M11 20v.01" /><path d="M17 14v.01" /><path d="M20 11v.01" /></svg>`;
}
