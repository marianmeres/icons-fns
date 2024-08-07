export const iconPhThinHeartStraightBreak = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220.21,59.8a54.06,54.06,0,0,0-76.34,0L128,75,112.18,59.8a54,54,0,0,0-76.4,76.35l89.37,90.66a4,4,0,0,0,5.7,0l89.36-90.64A54.07,54.07,0,0,0,220.21,59.8Zm-5.68,70.74L128,218.3,41.45,130.52a46,46,0,0,1,65.13-65l15.65,15.07-13,12.52A4,4,0,0,0,108,96a4,4,0,0,0,1.17,2.86L138.35,128l-13.18,13.17a4,4,0,1,0,5.66,5.66l16-16a4,4,0,0,0,0-5.66L117.71,96l31.77-30.58a46,46,0,1,1,65.05,65.08Z"/></svg>`;
}
