export const iconLucideBoomBox = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" /><path d="M8 8v1" /><path d="M12 8v1" /><path d="M16 8v1" /><rect width="20" height="12" x="2" y="9" rx="2" /><circle cx="8" cy="15" r="2" /><circle cx="16" cy="15" r="2" /></svg>`;
}
