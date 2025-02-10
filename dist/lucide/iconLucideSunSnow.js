export const iconLucideSunSnow = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M10 21v-1" /><path d="M10 4V3" /><path d="M10 9a3 3 0 0 0 0 6" /><path d="m14 20 1.25-2.5L18 18" /><path d="m14 4 1.25 2.5L18 6" /><path d="m17 21-3-6 1.5-3H22" /><path d="m17 3-3 6 1.5 3" /><path d="M2 12h1" /><path d="m20 10-1.5 2 1.5 2" /><path d="m3.64 18.36.7-.7" /><path d="m4.34 6.34-.7-.7" /></svg>`;
}
