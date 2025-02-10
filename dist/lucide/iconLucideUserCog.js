export const iconLucideUserCog = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><circle cx="18" cy="15" r="3" /><circle cx="9" cy="7" r="4" /><path d="M10 15H6a4 4 0 0 0-4 4v2" /><path d="m21.7 16.4-.9-.3" /><path d="m15.2 13.9-.9-.3" /><path d="m16.6 18.7.3-.9" /><path d="m19.1 12.2.3-.9" /><path d="m19.6 18.7-.4-1" /><path d="m16.8 12.3-.4-1" /><path d="m14.3 16.6 1-.4" /><path d="m20.7 13.8 1-.4" /></svg>`;
}
