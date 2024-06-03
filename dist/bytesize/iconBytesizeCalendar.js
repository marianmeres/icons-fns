export const iconBytesizeCalendar = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 32}" height="${size || 32}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6 L2 30 30 30 30 6 Z M2 15 L30 15 M7 3 L7 9 M13 3 L13 9 M19 3 L19 9 M25 3 L25 9" /></svg>`;
}
