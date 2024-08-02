export const iconPhBoldPaintRoller = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,84H212V64a20,20,0,0,0-20-20H52A20,20,0,0,0,32,64V84H16a12,12,0,0,0,0,24H32v20a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V108h16V155L130.5,182.8A20.09,20.09,0,0,0,116,202v30a12,12,0,0,0,24,0V205.05l97.5-27.85A20.09,20.09,0,0,0,252,158V104A20,20,0,0,0,232,84Zm-44,40H56V68H188Z"/></svg>`;
}
