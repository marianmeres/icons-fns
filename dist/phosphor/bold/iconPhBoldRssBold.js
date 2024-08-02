export const iconPhBoldRssBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M109.74,146.26A75.53,75.53,0,0,1,132,200a12,12,0,0,1-24,0,52,52,0,0,0-52-52,12,12,0,0,1,0-24A75.51,75.51,0,0,1,109.74,146.26ZM56,76a12,12,0,0,0,0,24A100,100,0,0,1,156,200a12,12,0,0,0,24,0A124,124,0,0,0,56,76Zm121.62,2.38A170.85,170.85,0,0,0,56,28a12,12,0,0,0,0,24A147,147,0,0,1,160.65,95.35,147,147,0,0,1,204,200a12,12,0,0,0,24,0A170.85,170.85,0,0,0,177.62,78.38ZM60,180a16,16,0,1,0,16,16A16,16,0,0,0,60,180Z"/></svg>`;
}
