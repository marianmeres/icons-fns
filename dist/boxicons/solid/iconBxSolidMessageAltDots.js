export const iconBxSolidMessageAltDots = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.5l3.5 4 3.5-4H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM9 12a2 2 0 1 1 .001-4.001A2 2 0 0 1 9 12zm6 0a2 2 0 1 1 .001-4.001A2 2 0 0 1 15 12z"/></svg>`;
}
