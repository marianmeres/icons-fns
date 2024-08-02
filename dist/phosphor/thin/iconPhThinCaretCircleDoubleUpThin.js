export const iconPhThinCaretCircleDoubleUpThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M198.71,57.29A100,100,0,1,0,57.29,198.71,100,100,0,1,0,198.71,57.29Zm-5.66,135.76A92,92,0,1,1,220,128,91.37,91.37,0,0,1,193.05,193.05Zm-30.22-27.88a4,4,0,0,1-5.66,5.66L128,141.66,98.83,170.83a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0Zm0-56a4,4,0,0,1-5.66,5.66L128,85.66,98.83,114.83a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0Z"/></svg>`;
}
