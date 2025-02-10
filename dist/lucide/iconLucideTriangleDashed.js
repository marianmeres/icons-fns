export const iconLucideTriangleDashed = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M10.17 4.193a2 2 0 0 1 3.666.013" /><path d="M14 21h2" /><path d="m15.874 7.743 1 1.732" /><path d="m18.849 12.952 1 1.732" /><path d="M21.824 18.18a2 2 0 0 1-1.835 2.824" /><path d="M4.024 21a2 2 0 0 1-1.839-2.839" /><path d="m5.136 12.952-1 1.732" /><path d="M8 21h2" /><path d="m8.102 7.743-1 1.732" /></svg>`;
}
