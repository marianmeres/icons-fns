export const iconPhThinToiletPaper = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M72,120a8,8,0,1,1-8-8A8,8,0,0,1,72,120Zm164,0v88a12,12,0,0,1-12,12H112a12,12,0,0,1-12-12V168.86c-7.9,21.4-21,35.14-36,35.14-24.67,0-44-36.9-44-84S39.33,36,64,36H192C216.67,36,236,72.9,236,120Zm-136,0c0-41.2-16.49-76-36-76S28,78.8,28,120s16.49,76,36,76S100,161.2,100,120Zm128,88V124H208a4,4,0,0,1,0-8H228c-1-39.42-17.07-72-35.95-72H83.05c14.29,12.8,24.14,39.76,24.9,72h20a4,4,0,0,1,0,8H108v84a4,4,0,0,0,4,4H224A4,4,0,0,0,228,208Zm-52-92H160a4,4,0,0,0,0,8h16a4,4,0,0,0,0-8Z"/></svg>`;
}
