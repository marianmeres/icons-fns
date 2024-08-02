export const iconPhLightPenNibLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M246,92.68a13.94,13.94,0,0,0-4.1-9.9L173.21,14.1a14,14,0,0,0-19.8,0L124.68,42.83,66.22,64.76a14,14,0,0,0-8.9,10.8L34.08,215A6,6,0,0,0,40,222a6.61,6.61,0,0,0,1-.08l139.44-23.24a14,14,0,0,0,10.81-8.9l21.92-58.46,28.74-28.74A13.92,13.92,0,0,0,246,92.68Zm-66,92.89a2,2,0,0,1-1.54,1.27L57.49,207l52.87-52.88a26,26,0,1,0-8.48-8.48L49,198.53l20.17-121A2,2,0,0,1,70.43,76l56.06-21L201,129.51ZM110,132a14,14,0,1,1,14,14A14,14,0,0,1,110,132ZM233.41,94.1,208,119.51,136.48,48,161.9,22.58a2,2,0,0,1,2.83,0l68.68,68.69a2,2,0,0,1,0,2.83Z"/></svg>`;
}
