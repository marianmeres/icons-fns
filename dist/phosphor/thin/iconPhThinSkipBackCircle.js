export const iconPhThinSkipBackCircle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM161.94,84.5a4,4,0,0,0-4.06.11L100,120.78V88a4,4,0,0,0-8,0v80a4,4,0,0,0,8,0V135.22l57.88,36.17A4,4,0,0,0,160,172a4.06,4.06,0,0,0,1.94-.5A4,4,0,0,0,164,168V88A4,4,0,0,0,161.94,84.5ZM156,160.78,103.55,128,156,95.22Z"/></svg>`;
}
