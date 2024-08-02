export const iconPhBoldAirplaneInFlightBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,216a12,12,0,0,1-12,12H72a12,12,0,0,1,0-24H216A12,12,0,0,1,228,216Zm24-80v24a12,12,0,0,1-12,12H61.07a43.72,43.72,0,0,1-42.14-31.36L4.86,93.75A20,20,0,0,1,24,68h8a12,12,0,0,1,8.48,3.51L61,92H76.27L69,70.32A20,20,0,0,1,88,44h8a12,12,0,0,1,8.48,3.51L149,92h59A44.05,44.05,0,0,1,252,136Zm-24,0a20,20,0,0,0-20-20H144a12,12,0,0,1-8.48-3.51L94.83,71.79l9.47,28.42A12,12,0,0,1,92.91,116H56a12,12,0,0,1-8.49-3.51L30.4,95.36l11.51,38.39A19.89,19.89,0,0,0,61.07,148H228Z"/></svg>`;
}
