export const iconPhThinCaretCircleDoubleRight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M198.71,57.29A100,100,0,1,0,57.29,198.71,100,100,0,1,0,198.71,57.29Zm-5.66,135.76A92,92,0,1,1,220,128,91.37,91.37,0,0,1,193.05,193.05Zm-70.22-67.88a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66-5.66L114.34,128,85.17,98.83a4,4,0,0,1,5.66-5.66Zm56,0a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66-5.66L170.34,128,141.17,98.83a4,4,0,0,1,5.66-5.66Z"/></svg>`;
}
