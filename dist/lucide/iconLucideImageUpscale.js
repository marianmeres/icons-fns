export const iconLucideImageUpscale = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 3h5v5" /><path d="M17 21h2a2 2 0 0 0 2-2" /><path d="M21 12v3" /><path d="m21 3-5 5" /><path d="M3 7V5a2 2 0 0 1 2-2" /><path d="m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" /><path d="M9 3h3" /><rect x="3" y="11" width="10" height="10" rx="1" /></svg>`;
}
