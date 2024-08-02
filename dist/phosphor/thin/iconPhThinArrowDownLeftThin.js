export const iconPhThinArrowDownLeftThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M194.83,66.83,73.66,188H168a4,4,0,0,1,0,8H64a4,4,0,0,1-4-4V88a4,4,0,0,1,8,0v94.34L189.17,61.17a4,4,0,1,1,5.66,5.66Z"/></svg>`;
}
