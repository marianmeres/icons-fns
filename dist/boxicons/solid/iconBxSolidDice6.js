export const iconBxSolidDice6 = (props = {}) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM8 17.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 8 17.5zm0-4a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 8 13.5zm0-4a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 8 9.5zm8 8a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 16 17.5zm0-4a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 16 13.5zm0-4a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 16 9.5z"/></svg>`;
}
