export const iconLucideFolderCog = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><circle cx="18" cy="18" r="3" /><path d="M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3" /><path d="m21.7 19.4-.9-.3" /><path d="m15.2 16.9-.9-.3" /><path d="m16.6 21.7.3-.9" /><path d="m19.1 15.2.3-.9" /><path d="m19.6 21.7-.4-1" /><path d="m16.8 15.3-.4-1" /><path d="m14.3 19.6 1-.4" /><path d="m20.7 16.8 1-.4" /></svg>`;
}
