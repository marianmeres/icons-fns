export const iconPhLightBlueprint = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,58H70V40a6,6,0,0,0-6-6H48A30,30,0,0,0,18,64V176a30,30,0,0,0,30,30H232a6,6,0,0,0,6-6V64A6,6,0,0,0,232,58ZM30,64A18,18,0,0,1,48,46H58V146H48a29.87,29.87,0,0,0-18,6ZM226,194H48a18,18,0,0,1,0-36H64a6,6,0,0,0,6-6V70H226ZM104,138a6,6,0,0,0,0,12h18v10a6,6,0,0,0,12,0V150h28v10a6,6,0,0,0,12,0V150h18a6,6,0,0,0,0-12H174V118h18a6,6,0,0,0,0-12H174V96a6,6,0,0,0-12,0v10H134V96a6,6,0,0,0-12,0v10H104a6,6,0,0,0,0,12h18v20Zm30-20h28v20H134Z"/></svg>`;
}
