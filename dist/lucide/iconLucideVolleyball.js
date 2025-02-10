export const iconLucideVolleyball = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4" /><path d="M12 12a12.6 12.6 0 0 1-8.7 5" /><path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5" /><path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10" /><path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5" /><circle cx="12" cy="12" r="10" /></svg>`;
}
