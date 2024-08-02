export const iconPhLightCookie = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M163.07,164.93a10,10,0,1,1-14.14,0A10,10,0,0,1,163.07,164.93Zm-78.14-8a10,10,0,1,0,14.14,0A10,10,0,0,0,84.93,156.93Zm6.14-41.86a10,10,0,1,0-14.14,0A10,10,0,0,0,91.07,115.07Zm33.86,1.86a10,10,0,1,0,14.14,0A10,10,0,0,0,124.93,116.93ZM230,128A102,102,0,1,1,128,26a6,6,0,0,1,6,6,42,42,0,0,0,42,42,6,6,0,0,1,6,6,42,42,0,0,0,42,42A6,6,0,0,1,230,128Zm-12.18,5.65A54.09,54.09,0,0,1,170.3,85.7a54.09,54.09,0,0,1-48-47.53,90,90,0,1,0,95.47,95.48Z"/></svg>`;
}
