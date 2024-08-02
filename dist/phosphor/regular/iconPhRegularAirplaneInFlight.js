export const iconPhRegularAirplaneInFlight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,216a8,8,0,0,1-8,8H72a8,8,0,1,1,0-16H216A8,8,0,0,1,224,216Zm24-80v24a8,8,0,0,1-8,8H61.07a39.75,39.75,0,0,1-38.31-28.51L8.69,92.6A16,16,0,0,1,24,72h8a8,8,0,0,1,5.65,2.34L59.32,96H81.81l-9-26.94A16,16,0,0,1,88,48h8a8,8,0,0,1,5.66,2.34L147.32,96H208A40,40,0,0,1,248,136Zm-16,0a24,24,0,0,0-24-24H144a8,8,0,0,1-5.65-2.34L92.69,64H88l12.49,37.47A8,8,0,0,1,92.91,112H56a8,8,0,0,1-5.66-2.34L28.69,88H24l14.07,46.9a23.85,23.85,0,0,0,23,17.1H232Z"/></svg>`;
}
