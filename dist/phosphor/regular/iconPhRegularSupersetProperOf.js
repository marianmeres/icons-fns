export const iconPhRegularSupersetProperOf = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,128a88.1,88.1,0,0,1-88,88H64a8,8,0,0,1,0-16h72a72,72,0,0,0,0-144H64a8,8,0,0,1,0-16h72A88.1,88.1,0,0,1,224,128Z"/></svg>`;
}
