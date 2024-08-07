export const iconPhThinChartPolar = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm91.91,96H187.85A60.07,60.07,0,0,0,132,68.15V36.09A92.13,92.13,0,0,1,219.91,124ZM124,124H76.17A52.05,52.05,0,0,1,124,76.17Zm0,8v47.83A52.05,52.05,0,0,1,76.17,132Zm8,0h47.83A52.05,52.05,0,0,1,132,179.83Zm0-8V76.17A52.05,52.05,0,0,1,179.83,124Zm-8-87.91V68.15A60.07,60.07,0,0,0,68.15,124H36.09A92.13,92.13,0,0,1,124,36.09ZM36.09,132H68.15A60.07,60.07,0,0,0,124,187.85v32.06A92.13,92.13,0,0,1,36.09,132ZM132,219.91V187.85A60.07,60.07,0,0,0,187.85,132h32.06A92.13,92.13,0,0,1,132,219.91Z"/></svg>`;
}
