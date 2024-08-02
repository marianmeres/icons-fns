export const iconPhLightCableCarLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M245.91,31a6,6,0,0,0-7-4.85L15,66.1A6,6,0,0,0,16,78a6.53,6.53,0,0,0,1.07-.09L122,59.17V98H64a30,30,0,0,0-30,30v64a30,30,0,0,0,30,30H192a30,30,0,0,0,30-30V128a30,30,0,0,0-30-30H134V57L241.05,37.91A6,6,0,0,0,245.91,31ZM102,162V110h52v52ZM64,110H90v52H46V128A18,18,0,0,1,64,110ZM192,210H64a18,18,0,0,1-18-18V174H210v18A18,18,0,0,1,192,210Zm18-82v34H166V110h26A18,18,0,0,1,210,128Z"/></svg>`;
}
