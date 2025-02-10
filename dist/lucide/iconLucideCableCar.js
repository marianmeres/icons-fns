export const iconLucideCableCar = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M10 3h.01" /><path d="M14 2h.01" /><path d="m2 9 20-5" /><path d="M12 12V6.5" /><rect width="16" height="10" x="4" y="12" rx="3" /><path d="M9 12v5" /><path d="M15 12v5" /><path d="M4 17h16" /></svg>`;
}
