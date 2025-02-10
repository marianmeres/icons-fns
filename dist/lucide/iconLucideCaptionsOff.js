export const iconLucideCaptionsOff = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M10.5 5H19a2 2 0 0 1 2 2v8.5" /><path d="M17 11h-.5" /><path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" /><path d="m2 2 20 20" /><path d="M7 11h4" /><path d="M7 15h2.5" /></svg>`;
}
