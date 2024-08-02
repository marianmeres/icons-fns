export const iconPhBoldVectorTwoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232.49,200.49l-32,32a12,12,0,0,1-17-17L195,204H80a12,12,0,0,1-12-12V69L56.49,80.49a12,12,0,1,1-17-17l32-32a12,12,0,0,1,17,0l32,32a12,12,0,0,1-17,17L92,69V180H195l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,232.49,200.49Z"/></svg>`;
}
