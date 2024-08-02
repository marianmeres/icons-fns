export const iconPhBoldBookOpenUserBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,72H160a43.86,43.86,0,0,0-32,13.85A43.86,43.86,0,0,0,96,72H24A12,12,0,0,0,12,84V200a12,12,0,0,0,12,12H96a20,20,0,0,1,20,20,12,12,0,0,0,24,0,20,20,0,0,1,20-20h72a12,12,0,0,0,12-12V84A12,12,0,0,0,232,72ZM96,188H36V96H96a20,20,0,0,1,20,20v76.81A43.79,43.79,0,0,0,96,188Zm124,0H160a43.71,43.71,0,0,0-20,4.83V116a20,20,0,0,1,20-20h60ZM86.4,40.79a52,52,0,0,1,83.2,0,12,12,0,0,1-19.19,14.42,28,28,0,0,0-44.82,0A12,12,0,0,1,86.4,40.79Z"/></svg>`;
}
