export const iconPhFillCaretCircleDoubleDown = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M201.57,54.43A104.15,104.15,0,1,0,232,128,104.17,104.17,0,0,0,201.57,54.43Zm-35.9,95.24-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,1,1,11.32-11.32L128,164.71l26.35-26.36a8,8,0,1,1,11.32,11.32Zm0-56-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,1,1,11.32-11.32L128,108.68l26.35-26.36a8,8,0,1,1,11.32,11.32Z"/></svg>`;
}
