export const iconPhLightSeatbeltLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,110A42,42,0,1,0,86,68,42,42,0,0,0,128,110Zm0-72A30,30,0,1,1,98,68,30,30,0,0,1,128,38Zm78,186a6,6,0,0,1-6,6H56a6,6,0,0,1-4-10.5l100.58-88.75a66,66,0,0,0-89.78,50.72,6,6,0,0,1-5.91,5.05,6.2,6.2,0,0,1-1-.07,6,6,0,0,1-5-6.88A78,78,0,0,1,162.49,122L188,99.5a6,6,0,1,1,7.94,9L71.87,218H200A6,6,0,0,1,206,224Zm-13.92-76.48A77.53,77.53,0,0,1,206,192a6,6,0,0,1-12,0,65.62,65.62,0,0,0-11.77-37.63,6,6,0,0,1,9.85-6.85Z"/></svg>`;
}
