export const iconLucideAlarmClockOff = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<!-- @license lucide-static v0.473.0 - ISC --><svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ><path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" /><path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" /><path d="m22 6-3-3" /><path d="M6.26 18.67 4 21" /><path d="m2 2 20 20" /><path d="M4 4 2 6" /></svg>`;
}
