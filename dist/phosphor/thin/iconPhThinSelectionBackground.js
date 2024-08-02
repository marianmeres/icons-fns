export const iconPhThinSelectionBackground = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M160,84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H160a12,12,0,0,0,12-12V96A12,12,0,0,0,160,84Zm4,124a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H160a4,4,0,0,1,4,4ZM140,40a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H144A4,4,0,0,1,140,40Zm80,8v8a4,4,0,0,1-8,0V48a4,4,0,0,0-4-4h-8a4,4,0,0,1,0-8h8A12,12,0,0,1,220,48Zm0,48v16a4,4,0,0,1-8,0V96a4,4,0,0,1,8,0Zm0,56v8a12,12,0,0,1-12,12h-8a4,4,0,0,1,0-8h8a4,4,0,0,0,4-4v-8a4,4,0,0,1,8,0ZM84,56V48A12,12,0,0,1,96,36h8a4,4,0,0,1,0,8H96a4,4,0,0,0-4,4v8a4,4,0,0,1-8,0Z"/></svg>`;
}
