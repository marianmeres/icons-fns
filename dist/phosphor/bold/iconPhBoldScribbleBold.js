export const iconPhBoldScribbleBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208.5,192.49a10.6,10.6,0,0,0,0,15,12,12,0,0,1-17,17,34.62,34.62,0,0,1,0-49l9.37-9.37a10.63,10.63,0,0,0-15-15l-66.76,66.75a34.63,34.63,0,0,1-49-49l98.76-98.75a10.63,10.63,0,0,0-15-15L87.11,121.86a34.63,34.63,0,0,1-49-49L79.51,31.51a12,12,0,1,1,17,17L55.1,89.86a10.63,10.63,0,0,0,15,15l66.76-66.75a34.63,34.63,0,1,1,49,49L87.11,185.86a10.63,10.63,0,0,0,15,15l66.75-66.75a34.63,34.63,0,0,1,49,49Z"/></svg>`;
}
