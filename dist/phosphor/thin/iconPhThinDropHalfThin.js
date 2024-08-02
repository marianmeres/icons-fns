export const iconPhThinDropHalfThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M171,50.37a250.18,250.18,0,0,0-40.73-37.65,4,4,0,0,0-4.58,0A250.18,250.18,0,0,0,85,50.37C58.17,81.21,44,113.58,44,144a84,84,0,0,0,168,0C212,113.58,197.83,81.21,171,50.37ZM204,144a75.41,75.41,0,0,1-1,12H132V132h71.21A93.38,93.38,0,0,1,204,144ZM190.14,92H132V68h43A176.56,176.56,0,0,1,190.14,92ZM132,164h69.31a75.63,75.63,0,0,1-11.4,24H132Zm0-40V100h62a120.07,120.07,0,0,1,7.88,24Zm33.1-68.23q1.77,2,3.59,4.23H132V24.07A256.44,256.44,0,0,1,165.1,55.77ZM52,144c0-35.9,21.15-67.8,38.9-88.23A256.44,256.44,0,0,1,124,24.07V219.89A76.09,76.09,0,0,1,52,144Zm80,75.89V196h51.35A75.79,75.79,0,0,1,132,219.89Z"/></svg>`;
}
