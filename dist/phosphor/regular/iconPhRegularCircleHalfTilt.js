export const iconPhRegularCircleHalfTilt = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM184,195.87a87.16,87.16,0,0,1-16,10.5V99.31l16-16Zm-80-32.56,16-16v68.28a88.37,88.37,0,0,1-16-3ZM88,206.37a87,87,0,0,1-16.3-10.76L88,179.31Zm48-75.06,16-16v97.32a88.37,88.37,0,0,1-16,3ZM40,128A88,88,0,0,1,184.3,60.39L60.38,184.31A87.34,87.34,0,0,1,40,128Zm160,50.59V77.41a88,88,0,0,1,0,101.18Z"/></svg>`;
}
