export const iconPhFillMarkerCircle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,182.37a87.89,87.89,0,0,1-80,0V176h80ZM104,160V144h48v16Zm80,35.83V176a16,16,0,0,0-16-16V144a16,16,0,0,0-13.61-15.8L143.66,76.74a16,16,0,0,0-31.32,0L101.61,128.2A16,16,0,0,0,88,144v16a16,16,0,0,0-16,16v19.83a88,88,0,1,1,112,0Z"/></svg>`;
}
