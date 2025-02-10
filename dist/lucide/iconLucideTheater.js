export const iconLucideTheater = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M2 10s3-3 3-8" /><path d="M22 10s-3-3-3-8" /><path d="M10 2c0 4.4-3.6 8-8 8" /><path d="M14 2c0 4.4 3.6 8 8 8" /><path d="M2 10s2 2 2 5" /><path d="M22 10s-2 2-2 5" /><path d="M8 15h8" /><path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" /><path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" /></svg>`;
}
