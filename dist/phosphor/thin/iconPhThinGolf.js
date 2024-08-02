export const iconPhThinGolf = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172,100a8,8,0,1,1-8-8A8,8,0,0,1,172,100Zm-40,24a8,8,0,1,0,8,8A8,8,0,0,0,132,124Zm80-28a84,84,0,1,1-84-84A84.09,84.09,0,0,1,212,96Zm-8,0a76,76,0,1,0-76,76A76.08,76.08,0,0,0,204,96ZM166.57,196.26C153,201.47,140.34,204,128,204s-25-2.53-38.57-7.74a4,4,0,1,0-2.86,7.48A119.31,119.31,0,0,0,124,211.91V248a4,4,0,0,0,8,0V211.91a119.31,119.31,0,0,0,37.43-8.17,4,4,0,0,0-2.86-7.48Z"/></svg>`;
}
