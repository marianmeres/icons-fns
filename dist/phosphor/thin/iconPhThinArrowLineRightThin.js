export const iconPhThinArrowLineRightThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M186.83,125.17a4,4,0,0,1,0,5.66l-72,72a4,4,0,0,1-5.66-5.66L174.34,132H32a4,4,0,0,1,0-8H174.34L109.17,58.83a4,4,0,0,1,5.66-5.66ZM216,36a4,4,0,0,0-4,4V216a4,4,0,0,0,8,0V40A4,4,0,0,0,216,36Z"/></svg>`;
}
