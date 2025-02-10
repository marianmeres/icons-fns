export const iconLucideToyBrick = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><rect width="18" height="12" x="3" y="8" rx="1" /><path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" /><path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" /></svg>`;
}
