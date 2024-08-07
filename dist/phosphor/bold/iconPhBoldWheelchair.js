export const iconPhBoldWheelchair = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M255.14,187.54a12,12,0,0,0-15.6-6.68l-9.75,3.9-27.06-54.13A12,12,0,0,0,192,124H116V108h52a12,12,0,0,0,0-24H116V77.81a34,34,0,1,0-24,0v8.88a76,76,0,1,0,88.35,106.57,12,12,0,1,0-21.57-10.52A52,52,0,1,1,92,112v24a12,12,0,0,0,12,12h80.58l28.68,57.37a12,12,0,0,0,15.19,5.77l20-8A12,12,0,0,0,255.14,187.54ZM104,36A10,10,0,1,1,94,46,10,10,0,0,1,104,36Z"/></svg>`;
}
