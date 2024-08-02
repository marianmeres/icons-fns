export const iconPhFillGasCanFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,24H123.31A15.86,15.86,0,0,0,112,28.69L101.66,39,91.31,28.69a16,16,0,0,0-22.62,0l-24,24a16,16,0,0,0,0,22.62L55,85.66,44.69,96A15.86,15.86,0,0,0,40,107.31V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM56,64,80,40,90.34,50.34l-24,24ZM180.8,185.6a8,8,0,1,1-9.6,12.8L128,166,84.8,198.4a8,8,0,0,1-9.6-12.8L114.67,156,75.2,126.4a8,8,0,0,1,9.6-12.8L128,146l43.2-32.4a8,8,0,0,1,9.6,12.8L141.33,156ZM176,72H136a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"/></svg>`;
}
