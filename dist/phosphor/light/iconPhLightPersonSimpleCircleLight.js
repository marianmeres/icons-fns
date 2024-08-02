export const iconPhLightPersonSimpleCircleLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM114,80a14,14,0,1,1,14,14A14,14,0,0,1,114,80Zm68,32a6,6,0,0,1-6,6H134v16.18l31,46.49a6,6,0,1,1-10,6.66l-27-40.51-27,40.51a6,6,0,1,1-10-6.66l31-46.49V118H80a6,6,0,0,1,0-12h96A6,6,0,0,1,182,112Z"/></svg>`;
}
