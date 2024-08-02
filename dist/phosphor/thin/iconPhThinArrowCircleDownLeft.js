export const iconPhThinArrowCircleDownLeft = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM162.83,93.17a4,4,0,0,1,0,5.66L105.66,156H144a4,4,0,0,1,0,8H96a4,4,0,0,1-4-4V112a4,4,0,0,1,8,0v38.34l57.17-57.17A4,4,0,0,1,162.83,93.17Z"/></svg>`;
}
