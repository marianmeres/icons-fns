export const iconPhThinNumberZero = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M179.87,65.35C167.65,46.15,149.71,36,128,36S88.35,46.15,76.13,65.35C65.73,81.69,60,103.94,60,128s5.73,46.31,16.13,62.65C88.35,209.85,106.29,220,128,220s39.65-10.15,51.87-29.35C190.27,174.31,196,152.06,196,128S190.27,81.69,179.87,65.35ZM128,212c-41.45,0-60-42.19-60-84s18.55-84,60-84,60,42.19,60,84S169.45,212,128,212Z"/></svg>`;
}
