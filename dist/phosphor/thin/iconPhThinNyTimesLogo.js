export const iconPhThinNyTimesLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172,140a8,8,0,1,1-8,8A8,8,0,0,1,172,140Zm14.31-40.38L119.57,68.48A76,76,0,0,0,52,144c0,1.32,0,2.64.1,3.95l74-39.48A4,4,0,0,1,132,112V219.88a75.64,75.64,0,0,0,68.52-53.08,4,4,0,1,1,7.63,2.4A84,84,0,1,1,57.57,98.25,32,32,0,0,1,68,36a4,4,0,0,1,1.69.38L188.85,92A24,24,0,0,0,188,44a4,4,0,0,1,0-8,32,32,0,0,1,0,64A4,4,0,0,1,186.31,99.62Zm-62.31,19-24,12.8v83.16a75.45,75.45,0,0,0,24,5.26ZM53.05,156.51a76.15,76.15,0,0,0,39,54.4V135.73Zm54-93.86L67.15,44a24,24,0,0,0-4.6,47.36c1.1-1.37,2.22-2.71,3.41-4A83.89,83.89,0,0,1,107.08,62.65Z"/></svg>`;
}
