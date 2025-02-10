export const iconLucideReplace = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M14 4a2 2 0 0 1 2-2" /><path d="M16 10a2 2 0 0 1-2-2" /><path d="M20 2a2 2 0 0 1 2 2" /><path d="M22 8a2 2 0 0 1-2 2" /><path d="m3 7 3 3 3-3" /><path d="M6 10V5a3 3 0 0 1 3-3h1" /><rect x="2" y="14" width="8" height="8" rx="2" /></svg>`;
}
