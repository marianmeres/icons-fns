export const iconBytesizeMove = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 32}" height="${size || 32}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16 L29 16 M16 3 L16 29 M12 7 L16 3 20 7 M12 25 L16 29 20 25 M25 12 L29 16 25 20 M7 12 L3 16 7 20" /></svg>`;
}
