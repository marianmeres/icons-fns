export const iconPhThinArrowsInLineHorizontalThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M132,40V216a4,4,0,0,1-8,0V40a4,4,0,0,1,8,0ZM66.83,93.17a4,4,0,0,0-5.66,5.66L86.34,124H16a4,4,0,0,0,0,8H86.34L61.17,157.17a4,4,0,0,0,5.66,5.66l32-32a4,4,0,0,0,0-5.66ZM240,124H169.66l25.17-25.17a4,4,0,1,0-5.66-5.66l-32,32a4,4,0,0,0,0,5.66l32,32a4,4,0,0,0,5.66-5.66L169.66,132H240a4,4,0,0,0,0-8Z"/></svg>`;
}
