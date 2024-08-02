export const iconPhDuotoneTrendDown = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,128v64H168Z" opacity="0.2"/><path d="M235.06,120.61a8,8,0,0,0-8.72,1.73L200,148.69,141.66,90.34a8,8,0,0,0-11.32,0L96,124.69,29.66,58.34A8,8,0,0,0,18.34,69.66l72,72a8,8,0,0,0,11.32,0L136,107.31,188.69,160l-26.35,26.34A8,8,0,0,0,168,200h64a8,8,0,0,0,8-8V128A8,8,0,0,0,235.06,120.61ZM224,184H187.31L224,147.31Z"/></svg>`;
}
