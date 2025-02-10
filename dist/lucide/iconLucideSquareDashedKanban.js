export const iconLucideSquareDashedKanban = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M8 7v7" /><path d="M12 7v4" /><path d="M16 7v9" /><path d="M5 3a2 2 0 0 0-2 2" /><path d="M9 3h1" /><path d="M14 3h1" /><path d="M19 3a2 2 0 0 1 2 2" /><path d="M21 9v1" /><path d="M21 14v1" /><path d="M21 19a2 2 0 0 1-2 2" /><path d="M14 21h1" /><path d="M9 21h1" /><path d="M5 21a2 2 0 0 1-2-2" /><path d="M3 14v1" /><path d="M3 9v1" /></svg>`;
}
