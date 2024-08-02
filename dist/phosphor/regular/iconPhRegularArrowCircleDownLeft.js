export const iconPhRegularArrowCircleDownLeft = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM165.66,90.34a8,8,0,0,1,0,11.32L115.31,152H144a8,8,0,0,1,0,16H96a8,8,0,0,1-8-8V112a8,8,0,0,1,16,0v28.69l50.34-50.35A8,8,0,0,1,165.66,90.34Z"/></svg>`;
}
