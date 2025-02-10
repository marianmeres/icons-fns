export const iconLucideSunDim = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="4" /><path d="M12 4h.01" /><path d="M20 12h.01" /><path d="M12 20h.01" /><path d="M4 12h.01" /><path d="M17.657 6.343h.01" /><path d="M17.657 17.657h.01" /><path d="M6.343 17.657h.01" /><path d="M6.343 6.343h.01" /></svg>`;
}
