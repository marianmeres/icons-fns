export const iconLucideRockingChair = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><polyline points="3.5 2 6.5 12.5 18 12.5" /><line x1="9.5" x2="5.5" y1="12.5" y2="20" /><line x1="15" x2="18.5" y1="12.5" y2="20" /><path d="M2.75 18a13 13 0 0 0 18.5 0" /></svg>`;
}
