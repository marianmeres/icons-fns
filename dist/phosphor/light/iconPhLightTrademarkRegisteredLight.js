export const iconPhLightTrademarkRegisteredLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm20.16-78.58A30,30,0,0,0,136,82H104a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V142h25.46L155,171.33a6,6,0,1,0,10-6.66ZM110,94h26a18,18,0,0,1,0,36H110Z"/></svg>`;
}
