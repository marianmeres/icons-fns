export const iconBxSolidLogOutCircle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M12 3c-4.963 0-9 4.037-9 9v.001l5-4v3h7v2H8v3l-5-4C3.001 16.964 7.037 21 12 21s9-4.037 9-9-4.037-9-9-9z"/></svg>`;
}
