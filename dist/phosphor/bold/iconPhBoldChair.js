export const iconPhBoldChair = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,128H180V108h12a20,20,0,0,0,20-20V40a20,20,0,0,0-20-20H64A20,20,0,0,0,44,40V88a20,20,0,0,0,20,20H76v20H48a20,20,0,0,0-20,20v24a20,20,0,0,0,20,20h8v32a12,12,0,0,0,24,0V192h96v32a12,12,0,0,0,24,0V192h8a20,20,0,0,0,20-20V148A20,20,0,0,0,208,128ZM68,44H188V84H68Zm32,64h56v20H100Zm104,60H52V152H204Z"/></svg>`;
}
