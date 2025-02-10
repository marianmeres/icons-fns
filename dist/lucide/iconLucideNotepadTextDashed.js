export const iconLucideNotepadTextDashed = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M8 2v4" /><path d="M12 2v4" /><path d="M16 2v4" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M20 12v2" /><path d="M20 18v2a2 2 0 0 1-2 2h-1" /><path d="M13 22h-2" /><path d="M7 22H6a2 2 0 0 1-2-2v-2" /><path d="M4 14v-2" /><path d="M4 8V6a2 2 0 0 1 2-2h2" /><path d="M8 10h6" /><path d="M8 14h8" /><path d="M8 18h5" /></svg>`;
}
