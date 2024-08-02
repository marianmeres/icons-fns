export const iconPhBoldQueue = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm104,52H40a12,12,0,0,0,0,24h92a12,12,0,0,0,0-24Zm0,64H40a12,12,0,0,0,0,24h92a12,12,0,0,0,0-24Zm120-20a12,12,0,0,1-5.64,10.18l-64,40A12,12,0,0,1,164,200V120a12,12,0,0,1,18.36-10.18l64,40A12,12,0,0,1,252,160Zm-34.64,0L188,141.65v36.7Z"/></svg>`;
}
