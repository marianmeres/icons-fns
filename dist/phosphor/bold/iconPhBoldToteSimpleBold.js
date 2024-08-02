export const iconPhBoldToteSimpleBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M239,66.75a20.12,20.12,0,0,0-15-6.75H179.83A52,52,0,0,0,76.17,60H32.08A20,20,0,0,0,12.14,82.35l14.25,120A20.06,20.06,0,0,0,46.33,220H209.67a20.06,20.06,0,0,0,19.94-17.65l14.25-120A20,20,0,0,0,239,66.75ZM128,36a28,28,0,0,1,27.71,24H100.29A28,28,0,0,1,128,36Zm78.19,160H49.81L36.5,84h183Z"/></svg>`;
}