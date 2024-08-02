export const iconPhThinCaretLineDownThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M45.17,74.83a4,4,0,0,1,5.66-5.66L128,146.34l77.17-77.17a4,4,0,1,1,5.66,5.66l-80,80a4,4,0,0,1-5.66,0ZM208,188H48a4,4,0,0,0,0,8H208a4,4,0,0,0,0-8Z"/></svg>`;
}
