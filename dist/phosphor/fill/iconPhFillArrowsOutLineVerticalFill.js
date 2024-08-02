export const iconPhFillArrowsOutLineVerticalFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M88.61,51.06a8,8,0,0,1,1.73-8.72l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,160,56H136V96a8,8,0,0,1-16,0V56H96A8,8,0,0,1,88.61,51.06ZM216,120H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-56,80H136V160a8,8,0,0,0-16,0v40H96a8,8,0,0,0-5.66,13.66l32,32a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,160,200Z"/></svg>`;
}
