export const iconPhThinAnchorSimpleThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,116H200a4,4,0,0,0,0,8h19.91A92.13,92.13,0,0,1,132,211.91V91.71a28,28,0,1,0-8,0v120.2A92.13,92.13,0,0,1,36.09,124H56a4,4,0,0,0,0-8H32a4,4,0,0,0-4,4,100,100,0,0,0,200,0A4,4,0,0,0,224,116ZM108,64a20,20,0,1,1,20,20A20,20,0,0,1,108,64Z"/></svg>`;
}
