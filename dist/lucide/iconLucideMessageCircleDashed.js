export const iconLucideMessageCircleDashed = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1" /><path d="M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1" /><path d="M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5" /><path d="M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1" /><path d="M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1" /><path d="M3.5 17.5 2 22l4.5-1.5" /><path d="M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5" /><path d="M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1" /></svg>`;
}
