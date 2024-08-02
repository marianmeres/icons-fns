export const iconPhLightChatDotsLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM84,118a10,10,0,1,0,10,10A10,10,0,0,0,84,118Zm88,0a10,10,0,1,0,10,10A10,10,0,0,0,172,118Zm58-54V192a14,14,0,0,1-14,14H82.23L49.07,234.64l-.06.05A13.87,13.87,0,0,1,40,238a14.11,14.11,0,0,1-5.95-1.33A13.88,13.88,0,0,1,26,224V64A14,14,0,0,1,40,50H216A14,14,0,0,1,230,64Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V224a2,2,0,0,0,3.26,1.55l34.82-30.08A6,6,0,0,1,80,194H216a2,2,0,0,0,2-2Z"/></svg>`;
}
