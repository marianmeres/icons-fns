export const iconPhFillArrowsInSimpleFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M120,144v48a8,8,0,0,1-13.66,5.66L88,179.31,53.66,213.66a8,8,0,0,1-11.32-11.32L76.69,168,58.34,149.66A8,8,0,0,1,64,136h48A8,8,0,0,1,120,144ZM213.66,42.34a8,8,0,0,0-11.32,0L168,76.69,149.66,58.34A8,8,0,0,0,136,64v48a8,8,0,0,0,8,8h48a8,8,0,0,0,5.66-13.66L179.31,88l34.35-34.34A8,8,0,0,0,213.66,42.34Z"/></svg>`;
}
