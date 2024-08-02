export const iconPhThinArrowsInCardinalThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M93.17,66.83a4,4,0,0,1,5.66-5.66L124,86.34V24a4,4,0,0,1,8,0V86.34l25.17-25.17a4,4,0,1,1,5.66,5.66l-32,32a4,4,0,0,1-5.66,0Zm37.66,90.34a4,4,0,0,0-5.66,0l-32,32a4,4,0,0,0,5.66,5.66L124,169.66V232a4,4,0,0,0,8,0V169.66l25.17,25.17a4,4,0,0,0,5.66-5.66ZM232,124H169.66l25.17-25.17a4,4,0,1,0-5.66-5.66l-32,32a4,4,0,0,0,0,5.66l32,32a4,4,0,0,0,5.66-5.66L169.66,132H232a4,4,0,0,0,0-8ZM98.83,125.17l-32-32a4,4,0,0,0-5.66,5.66L86.34,124H24a4,4,0,0,0,0,8H86.34L61.17,157.17a4,4,0,0,0,5.66,5.66l32-32A4,4,0,0,0,98.83,125.17Z"/></svg>`;
}
