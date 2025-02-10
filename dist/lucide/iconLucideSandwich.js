export const iconLucideSandwich = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" /><path d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" /><path d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" /><path d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" /><rect width="20" height="4" x="2" y="11" rx="1" /></svg>`;
}
