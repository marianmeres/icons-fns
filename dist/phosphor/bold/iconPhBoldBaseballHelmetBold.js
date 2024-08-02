export const iconPhBoldBaseballHelmetBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M120,156a32,32,0,1,0-32,32A32,32,0,0,0,120,156Zm-40,0a8,8,0,1,1,8,8A8,8,0,0,1,80,156Zm164-40H227.34A108,108,0,0,0,12,128v24a76.08,76.08,0,0,0,76,76h40a76.08,76.08,0,0,0,76-76V140h40a12,12,0,0,0,0-24ZM36,152V128a84,84,0,0,1,167.15-12H152a12,12,0,0,0-12,12v24a52,52,0,0,1-104,0Zm144,0a52.07,52.07,0,0,1-33.67,48.65A75.63,75.63,0,0,0,164,152V140h16Z"/></svg>`;
}
