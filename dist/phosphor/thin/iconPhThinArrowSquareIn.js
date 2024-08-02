export const iconPhThinArrowSquareIn = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M124,136v64a4,4,0,0,1-8,0V145.66L42.83,218.83a4,4,0,0,1-5.66-5.66L110.34,140H56a4,4,0,0,1,0-8h64A4,4,0,0,1,124,136ZM208,36H80A12,12,0,0,0,68,48V96a4,4,0,0,0,8,0V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4V176a4,4,0,0,1-4,4H160a4,4,0,0,0,0,8h48a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Z"/></svg>`;
}
