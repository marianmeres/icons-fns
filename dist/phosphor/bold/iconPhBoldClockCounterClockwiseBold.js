export const iconPhBoldClockCounterClockwiseBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M140,80v41.21l34.17,20.5a12,12,0,1,1-12.34,20.58l-40-24A12,12,0,0,1,116,128V80a12,12,0,0,1,24,0ZM128,28A99.38,99.38,0,0,0,57.24,57.34c-4.69,4.74-9,9.37-13.24,14V64a12,12,0,0,0-24,0v40a12,12,0,0,0,12,12H72a12,12,0,0,0,0-24H57.77C63,86,68.37,80.22,74.26,74.26a76,76,0,1,1,1.58,109,12,12,0,0,0-16.48,17.46A100,100,0,1,0,128,28Z"/></svg>`;
}
