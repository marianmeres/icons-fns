export const iconLucideTouchpadOff = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16" /><path d="M2 14h12" /><path d="M22 14h-2" /><path d="M12 20v-6" /><path d="m2 2 20 20" /><path d="M22 16V6a2 2 0 0 0-2-2H10" /></svg>`;
}
