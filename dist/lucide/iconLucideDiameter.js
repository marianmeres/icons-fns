export const iconLucideDiameter = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><circle cx="19" cy="19" r="2" /><circle cx="5" cy="5" r="2" /><path d="M6.48 3.66a10 10 0 0 1 13.86 13.86" /><path d="m6.41 6.41 11.18 11.18" /><path d="M3.66 6.48a10 10 0 0 0 13.86 13.86" /></svg>`;
}
