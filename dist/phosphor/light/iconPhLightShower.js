export const iconPhLightShower = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M62,236a10,10,0,1,1-10-10A10,10,0,0,1,62,236Zm22-42a10,10,0,1,0,10,10A10,10,0,0,0,84,194Zm-64,0a10,10,0,1,0,10,10A10,10,0,0,0,20,194Zm32-32a10,10,0,1,0,10,10A10,10,0,0,0,52,162ZM254,40a6,6,0,0,1-6,6H218.49l-28.9,28.89L167.83,202.32a14,14,0,0,1-23.71,7.57l-98-98a14,14,0,0,1,7.6-23.71l127.4-21.76,30.65-30.65A6,6,0,0,1,216,34h32A6,6,0,0,1,254,40ZM176.66,79.34,55.7,100a2,2,0,0,0-1.11,3.39l98,98a2,2,0,0,0,3.39-1.09Z"/></svg>`;
}
