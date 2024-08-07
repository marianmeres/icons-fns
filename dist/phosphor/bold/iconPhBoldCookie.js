export const iconPhBoldCookie = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M167.31,160.69a16,16,0,1,1-22.62,0A16,16,0,0,1,167.31,160.69Zm-86.62-8a16,16,0,1,0,22.62,0A16,16,0,0,0,80.69,152.69Zm14.62-33.38a16,16,0,1,0-22.62,0A16,16,0,0,0,95.31,119.31Zm48-6.62a16,16,0,1,0,0,22.62A16,16,0,0,0,143.31,112.69ZM236,128A108,108,0,1,1,128,20a12,12,0,0,1,12,12,36,36,0,0,0,36,36,12,12,0,0,1,12,12,36,36,0,0,0,36,36A12,12,0,0,1,236,128Zm-24.67,10.65A60.17,60.17,0,0,1,165,91a60.17,60.17,0,0,1-47.66-46.32,84,84,0,1,0,94,94Z"/></svg>`;
}
