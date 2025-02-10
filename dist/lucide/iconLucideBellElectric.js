export const iconLucideBellElectric = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M18.8 4A6.3 8.7 0 0 1 20 9" /><path d="M9 9h.01" /><circle cx="9" cy="9" r="7" /><rect width="10" height="6" x="4" y="16" rx="2" /><path d="M14 19c3 0 4.6-1.6 4.6-1.6" /><circle cx="20" cy="16" r="2" /></svg>`;
}
