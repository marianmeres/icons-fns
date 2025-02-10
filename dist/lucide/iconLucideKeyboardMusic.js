export const iconLucideKeyboardMusic = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><rect width="20" height="16" x="2" y="4" rx="2" /><path d="M6 8h4" /><path d="M14 8h.01" /><path d="M18 8h.01" /><path d="M2 12h20" /><path d="M6 12v4" /><path d="M10 12v4" /><path d="M14 12v4" /><path d="M18 12v4" /></svg>`;
}
