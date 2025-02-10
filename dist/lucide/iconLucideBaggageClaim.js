export const iconLucideBaggageClaim = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" /><path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" /><rect width="13" height="8" x="8" y="6" rx="1" /><circle cx="18" cy="20" r="2" /><circle cx="9" cy="20" r="2" /></svg>`;
}
