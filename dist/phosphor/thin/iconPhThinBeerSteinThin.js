export const iconPhThinBeerSteinThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,92H196V72a36,36,0,0,0-36-36H147.31C136,25.81,120.34,20,104,20,70.92,20,44,43.33,44,72V208a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V196h20a20,20,0,0,0,20-20V112A20,20,0,0,0,216,92ZM104,28c14.89,0,29.09,5.43,39,14.89A4,4,0,0,0,145.74,44H160a28,28,0,0,1,27.71,24H52.22C54.62,45.61,76.92,28,104,28Zm84,180a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V76H188Zm40-32a12,12,0,0,1-12,12H196V100h20a12,12,0,0,1,12,12ZM100,104v80a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v80a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z"/></svg>`;
}
