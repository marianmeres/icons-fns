export const iconLucideBatteryFull = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><rect width="16" height="10" x="2" y="7" rx="2" ry="2" /><line x1="22" x2="22" y1="11" y2="13" /><line x1="6" x2="6" y1="11" y2="13" /><line x1="10" x2="10" y1="11" y2="13" /><line x1="14" x2="14" y1="11" y2="13" /></svg>`;
}
