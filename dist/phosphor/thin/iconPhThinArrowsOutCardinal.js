export const iconPhThinArrowsOutCardinal = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M93.17,58.83a4,4,0,0,1,0-5.66l32-32a4,4,0,0,1,5.66,0l32,32a4,4,0,0,1-5.66,5.66L132,33.66V96a4,4,0,0,1-8,0V33.66L98.83,58.83A4,4,0,0,1,93.17,58.83Zm64,138.34L132,222.34V160a4,4,0,0,0-8,0v62.34L98.83,197.17a4,4,0,0,0-5.66,5.66l32,32a4,4,0,0,0,5.66,0l32-32a4,4,0,0,0-5.66-5.66Zm77.66-72-32-32a4,4,0,0,0-5.66,5.66L222.34,124H160a4,4,0,0,0,0,8h62.34l-25.17,25.17a4,4,0,0,0,5.66,5.66l32-32A4,4,0,0,0,234.83,125.17ZM33.66,132H96a4,4,0,0,0,0-8H33.66L58.83,98.83a4,4,0,0,0-5.66-5.66l-32,32a4,4,0,0,0,0,5.66l32,32a4,4,0,1,0,5.66-5.66Z"/></svg>`;
}
