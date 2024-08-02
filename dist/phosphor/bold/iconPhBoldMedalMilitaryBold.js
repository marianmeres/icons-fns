export const iconPhBoldMedalMilitaryBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M207,36H49A21,21,0,0,0,28,57v49.21a21,21,0,0,0,12.31,19.11l56,25.47a52,52,0,1,0,63.32,0l56-25.47A21,21,0,0,0,228,106.21V57A21,21,0,0,0,207,36ZM128,138.82l-28-12.73V60h56v66.09ZM52,60H76v55.18L52,104.27Zm76,160a28,28,0,1,1,28-28A28,28,0,0,1,128,220Zm76-115.73-24,10.91V60h24Z"/></svg>`;
}
