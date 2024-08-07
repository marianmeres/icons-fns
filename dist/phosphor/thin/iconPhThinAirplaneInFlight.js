export const iconPhThinAirplaneInFlight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,216a4,4,0,0,1-4,4H72a4,4,0,0,1,0-8H216A4,4,0,0,1,220,216Zm24-80v24a4,4,0,0,1-4,4H61.06a35.79,35.79,0,0,1-34.48-25.66L12.52,91.45A12,12,0,0,1,24,76h8a4,4,0,0,1,2.83,1.17L57.66,100h29.7L76.63,67.79A12,12,0,0,1,88,52h8a4,4,0,0,1,2.83,1.17L145.66,100H208A36,36,0,0,1,244,136Zm-8,0a28,28,0,0,0-28-28H144a4,4,0,0,1-2.83-1.17L94.35,60H88a4,4,0,0,0-3.8,5.26L96.7,102.74A4,4,0,0,1,92.91,108H56a4,4,0,0,1-2.82-1.17L30.35,84H24a4,4,0,0,0-3.83,5.15l14.07,46.9A27.83,27.83,0,0,0,61.06,156H236Z"/></svg>`;
}
