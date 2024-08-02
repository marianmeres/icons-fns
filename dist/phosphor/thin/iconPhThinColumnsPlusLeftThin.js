export const iconPhThinColumnsPlusLeftThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,36H104A12,12,0,0,0,92,48V208a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V48A12,12,0,0,0,128,36Zm4,172a4,4,0,0,1-4,4H104a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h24a4,4,0,0,1,4,4ZM200,36H176a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm4,172a4,4,0,0,1-4,4H176a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h24a4,4,0,0,1,4,4ZM68,128a4,4,0,0,1-4,4H44v20a4,4,0,0,1-8,0V132H16a4,4,0,0,1,0-8H36V104a4,4,0,0,1,8,0v20H64A4,4,0,0,1,68,128Z"/></svg>`;
}
