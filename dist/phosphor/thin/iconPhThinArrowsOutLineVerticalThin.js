export const iconPhThinArrowsOutLineVerticalThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM98.83,50.83,124,25.66V96a4,4,0,0,0,8,0V25.66l25.17,25.17a4,4,0,1,0,5.66-5.66l-32-32a4,4,0,0,0-5.66,0l-32,32a4,4,0,0,0,5.66,5.66Zm58.34,154.34L132,230.34V160a4,4,0,0,0-8,0v70.34L98.83,205.17a4,4,0,0,0-5.66,5.66l32,32a4,4,0,0,0,5.66,0l32-32a4,4,0,0,0-5.66-5.66Z"/></svg>`;
}
