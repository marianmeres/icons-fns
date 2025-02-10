export const iconLucideKeyboardOff = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M 20 4 A2 2 0 0 1 22 6" /><path d="M 22 6 L 22 16.41" /><path d="M 7 16 L 16 16" /><path d="M 9.69 4 L 20 4" /><path d="M14 8h.01" /><path d="M18 8h.01" /><path d="m2 2 20 20" /><path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" /><path d="M6 8h.01" /><path d="M8 12h.01" /></svg>`;
}
