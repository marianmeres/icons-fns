export const iconBxSolidFastForwardCircle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M12 2C6.485 2 2 6.485 2 12s4.485 10 10 10c5.514 0 10-4.485 10-10S17.514 2 12 2zm1 14v-4l-6 4V8l6 4V8l6 4-6 4z"/></svg>`;
}
