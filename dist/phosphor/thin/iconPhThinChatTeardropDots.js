export const iconPhThinChatTeardropDots = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M140,128a8,8,0,1,1-8-8A8,8,0,0,1,140,128Zm-52-8a8,8,0,1,0,8,8A8,8,0,0,0,88,120Zm88,0a8,8,0,1,0,8,8A8,8,0,0,0,176,120Zm52,4a96.11,96.11,0,0,1-96,96H48a12,12,0,0,1-12-12V124a96,96,0,0,1,192,0Zm-8,0a88,88,0,0,0-176,0v84a4,4,0,0,0,4,4h84A88.1,88.1,0,0,0,220,124Z"/></svg>`;
}
