export const iconPhThinJoystick = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,148H132V91.77a36,36,0,1,0-8,0V148H48a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V160A12,12,0,0,0,208,148ZM100,56a28,28,0,1,1,28,28A28,28,0,0,1,100,56ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V160a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-48-88a4,4,0,0,1,4-4h32a4,4,0,0,1,0,8H168A4,4,0,0,1,164,120Z"/></svg>`;
}
