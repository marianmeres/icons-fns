export const iconPhLightContactlessPayment = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M95.31,101.2a57.37,57.37,0,0,1,0,53.6,6,6,0,0,1-10.62-5.6,44.75,44.75,0,0,0,0-42.4,6,6,0,1,1,10.62-5.6Zm47.86-34.49a6,6,0,0,0-2.46,8.12,112.67,112.67,0,0,1,0,106.34,6,6,0,1,0,10.58,5.66,124.65,124.65,0,0,0,0-117.66A6,6,0,0,0,143.17,66.71Zm-28,16a6,6,0,0,0-2.48,8.12,79,79,0,0,1,0,74.36,6,6,0,0,0,10.6,5.64,91,91,0,0,0,0-85.64A6,6,0,0,0,115.18,82.7ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"/></svg>`;
}
