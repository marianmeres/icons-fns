export const iconPhLightArrowsInLineVerticalLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Zm-98.24-27.76a6,6,0,0,0,8.48,0l32-32a6,6,0,0,0-8.48-8.48L134,81.51V16a6,6,0,0,0-12,0V81.51L100.24,59.76a6,6,0,0,0-8.48,8.48Zm8.48,55.52a6,6,0,0,0-8.48,0l-32,32a6,6,0,0,0,8.48,8.48L122,174.49V240a6,6,0,0,0,12,0V174.49l21.76,21.75a6,6,0,0,0,8.48-8.48Z"/></svg>`;
}
