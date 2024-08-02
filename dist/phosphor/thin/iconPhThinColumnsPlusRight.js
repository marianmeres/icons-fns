export const iconPhThinColumnsPlusRight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M80,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H80a12,12,0,0,0,12-12V48A12,12,0,0,0,80,36Zm4,172a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H80a4,4,0,0,1,4,4ZM152,36H128a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V48A12,12,0,0,0,152,36Zm4,172a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h24a4,4,0,0,1,4,4Zm88-80a4,4,0,0,1-4,4H220v20a4,4,0,0,1-8,0V132H192a4,4,0,0,1,0-8h20V104a4,4,0,0,1,8,0v20h20A4,4,0,0,1,244,128Z"/></svg>`;
}
