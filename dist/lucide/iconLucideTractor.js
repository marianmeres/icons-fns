export const iconLucideTractor = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" /><path d="M16 18h-5" /><path d="M18 5a1 1 0 0 0-1 1v5.573" /><path d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" /><path d="M4 11V4" /><path d="M7 15h.01" /><path d="M8 10.1V4" /><circle cx="18" cy="18" r="2" /><circle cx="7" cy="15" r="5" /></svg>`;
}
