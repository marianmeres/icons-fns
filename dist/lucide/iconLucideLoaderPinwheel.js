export const iconLucideLoaderPinwheel = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" /><path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" /><path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" /><circle cx="12" cy="12" r="10" /></svg>`;
}
