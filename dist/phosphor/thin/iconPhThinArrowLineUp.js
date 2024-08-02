export const iconPhThinArrowLineUp = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M202.83,141.17a4,4,0,0,1-5.66,5.66L132,81.66V224a4,4,0,0,1-8,0V81.66L58.83,146.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0ZM216,36H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"/></svg>`;
}
