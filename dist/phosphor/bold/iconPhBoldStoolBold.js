export const iconPhBoldStoolBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204,64V40a20,20,0,0,0-20-20H72A20,20,0,0,0,52,40V64A20,20,0,0,0,72,84h2L52.15,222.13a12,12,0,1,0,23.7,3.74L83.1,180h89.8l7.25,45.87a12,12,0,1,0,23.7-3.74L182,84h2A20,20,0,0,0,204,64ZM76,44H180V60H76Zm93.11,112H86.89L98.25,84h59.5Z"/></svg>`;
}
