export const iconLucideRouteOff = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><circle cx="6" cy="19" r="3" /><path d="M9 19h8.5c.4 0 .9-.1 1.3-.2" /><path d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" /><path d="m2 2 20 20" /><path d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3" /><path d="M15 5h-4.3" /><circle cx="18" cy="5" r="3" /></svg>`;
}
