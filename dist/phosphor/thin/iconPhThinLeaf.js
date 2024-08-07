export const iconPhThinLeaf = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M219.45,40.31a4,4,0,0,0-3.76-3.76C141.06,32.16,81.46,54.39,56.24,96,39,124.56,39.9,158.37,58.8,191.54L37.17,213.17a4,4,0,0,0,5.66,5.66l21.63-21.64c17.39,9.91,35,14.89,51.83,14.89A83.43,83.43,0,0,0,160,199.76C201.61,174.54,223.84,114.93,219.45,40.31ZM155.82,192.92c-25.37,15.37-55.56,14.75-85.48-1.61l92.5-92.49a4,4,0,0,0-5.66-5.66l-92.49,92.5c-16.36-29.92-17-60.11-1.61-85.48C86.34,61.77,141.72,41,211.66,44.34,215,114.28,194.23,169.66,155.82,192.92Z"/></svg>`;
}
