export const iconLucideSmartphoneNfc = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><rect width="7" height="12" x="2" y="6" rx="1" /><path d="M13 8.32a7.43 7.43 0 0 1 0 7.36" /><path d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58" /><path d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" /></svg>`;
}
