export const iconPhThinMoonStarsThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236,96a4,4,0,0,1-4,4H212v20a4,4,0,0,1-8,0V100H184a4,4,0,0,1,0-8h20V72a4,4,0,0,1,8,0V92h20A4,4,0,0,1,236,96ZM144,52h12V64a4,4,0,0,0,8,0V52h12a4,4,0,0,0,0-8H164V32a4,4,0,0,0-8,0V44H144a4,4,0,0,0,0,8Zm69.73,103.58a4,4,0,0,1,.71,4,92,92,0,1,1-118-118,4,4,0,0,1,5.29,4.54A93.18,93.18,0,0,0,100,64a92.1,92.1,0,0,0,92,92,93.18,93.18,0,0,0,17.91-1.74A4,4,0,0,1,213.73,155.58Zm-9.46,7.67A100,100,0,0,1,92.75,51.73,84,84,0,1,0,204.27,163.25Z"/></svg>`;
}
