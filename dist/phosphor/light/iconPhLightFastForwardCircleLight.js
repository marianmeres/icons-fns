export const iconPhLightFastForwardCircleLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm63.6-94.8-48-36A6,6,0,0,0,134,92v30L87.6,87.2A6,6,0,0,0,78,92v72a6,6,0,0,0,9.6,4.8L134,134v30a6,6,0,0,0,9.6,4.8l48-36a6,6,0,0,0,0-9.6ZM90,152V104l32,24Zm56,0V104l32,24Z"/></svg>`;
}
