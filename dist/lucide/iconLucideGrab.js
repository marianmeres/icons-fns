export const iconLucideGrab = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" /><path d="M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" /><path d="M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" /><path d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" /><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" /></svg>`;
}
