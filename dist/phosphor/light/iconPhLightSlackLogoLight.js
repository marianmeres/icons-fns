export const iconPhLightSlackLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M218,128a30,30,0,1,0-36-48V56a30,30,0,0,0-54-18A30,30,0,1,0,80,74H56a30,30,0,0,0-18,54,30,30,0,1,0,36,48v24a30,30,0,0,0,54,18,30,30,0,1,0,48-36h24a30,30,0,0,0,18-54ZM200,86a18,18,0,0,1,0,36H182V104A18,18,0,0,1,200,86ZM152,38a18,18,0,0,1,18,18v48a18,18,0,0,1-18,18H134V56A18,18,0,0,1,152,38ZM86,56a18,18,0,0,1,36,0V74H104A18,18,0,0,1,86,56ZM38,104A18,18,0,0,1,56,86h48a18,18,0,0,1,18,18v18H56A18,18,0,0,1,38,104Zm18,66a18,18,0,0,1,0-36H74v18A18,18,0,0,1,56,170Zm48,48a18,18,0,0,1-18-18V152a18,18,0,0,1,18-18h18v66A18,18,0,0,1,104,218Zm66-18a18,18,0,0,1-36,0V182h18A18,18,0,0,1,170,200Zm30-30H152a18,18,0,0,1-18-18V134h66a18,18,0,0,1,0,36Z"/></svg>`;
}
