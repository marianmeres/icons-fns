export const iconPhRegularCaretCircleDoubleUp = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,190.23a88,88,0,1,1,0-124.46A88.11,88.11,0,0,1,190.23,190.23Zm-24.57-27.89a8,8,0,0,1-11.32,11.32L128,147.31l-26.34,26.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0Zm0-56a8,8,0,0,1-11.32,11.32L128,91.31l-26.34,26.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0Z"/></svg>`;
}
