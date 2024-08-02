export const iconPhLightCallBell = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M24,182H232a6,6,0,0,0,0-12H222V152a94.1,94.1,0,0,0-88-93.8V38h18a6,6,0,0,0,0-12H104a6,6,0,0,0,0,12h18V58.2A94.1,94.1,0,0,0,34,152v18H24a6,6,0,0,0,0,12Zm22-30a82,82,0,0,1,164,0v18H46Zm192,56a6,6,0,0,1-6,6H24a6,6,0,0,1,0-12H232A6,6,0,0,1,238,208Z"/></svg>`;
}
