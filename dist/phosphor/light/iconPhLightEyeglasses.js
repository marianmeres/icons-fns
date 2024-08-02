export const iconPhLightEyeglasses = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,42a6,6,0,0,0,0,12,18,18,0,0,1,18,18v62.65A42,42,0,0,0,147.21,154H108.79A42,42,0,0,0,38,134.65V72A18,18,0,0,1,56,54a6,6,0,0,0,0-12A30,30,0,0,0,26,72v92a42,42,0,0,0,84,2h36.1A42,42,0,0,0,230,164V72A30,30,0,0,0,200,42ZM68,194a30,30,0,1,1,30-30A30,30,0,0,1,68,194Zm120,0a30,30,0,1,1,30-30A30,30,0,0,1,188,194Z"/></svg>`;
}
