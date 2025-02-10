export const iconLucideScissorsLineDashed = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M5.42 9.42 8 12" /><circle cx="4" cy="8" r="2" /><path d="m14 6-8.58 8.58" /><circle cx="4" cy="16" r="2" /><path d="M10.8 14.8 14 18" /><path d="M16 12h-2" /><path d="M22 12h-2" /></svg>`;
}
