export const iconPhLightTractor = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M238,166.12V134a13.91,13.91,0,0,0-10-13.41l-.15,0L190,110.24V72a6,6,0,0,0-12,0v35l-28-7.58V54h10a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12H50V90H40a6,6,0,0,0,0,12H68a70.08,70.08,0,0,1,70,70v12a6,6,0,0,0,6,6h34.06A34,34,0,1,0,238,166.12ZM68,90H62V54h76v75.34A82,82,0,0,0,68,90Zm82,82V111.84l74.63,20.21A2,2,0,0,1,226,134V157a34,34,0,0,0-46.5,21H150Zm62,38a22,22,0,1,1,22-22A22,22,0,0,1,212,210ZM68,122a50,50,0,1,0,50,50A50.06,50.06,0,0,0,68,122Zm0,88a38,38,0,1,1,38-38A38,38,0,0,1,68,210Zm10-38a10,10,0,1,1-10-10A10,10,0,0,1,78,172Z"/></svg>`;
}
