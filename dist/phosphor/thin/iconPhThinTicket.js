export const iconPhThinTicket = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,100a4,4,0,0,0,4-4V64a12,12,0,0,0-12-12H32A12,12,0,0,0,20,64V96a4,4,0,0,0,4,4,28,28,0,0,1,0,56,4,4,0,0,0-4,4v32a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V160a4,4,0,0,0-4-4,28,28,0,0,1,0-56ZM28,192V163.78a36,36,0,0,0,0-71.56V64a4,4,0,0,1,4-4H92V196H32A4,4,0,0,1,28,192Zm168-64a36.06,36.06,0,0,0,32,35.78V192a4,4,0,0,1-4,4H100V60H224a4,4,0,0,1,4,4V92.22A36.06,36.06,0,0,0,196,128Z"/></svg>`;
}
