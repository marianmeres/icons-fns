export const iconLucideUnfoldHorizontal = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 12h6" /><path d="M8 12H2" /><path d="M12 2v2" /><path d="M12 8v2" /><path d="M12 14v2" /><path d="M12 20v2" /><path d="m19 15 3-3-3-3" /><path d="m5 9-3 3 3 3" /></svg>`;
}
