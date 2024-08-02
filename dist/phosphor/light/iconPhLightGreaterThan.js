export const iconPhLightGreaterThan = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M222,128a6,6,0,0,1-3.43,5.42l-152,72a6,6,0,1,1-5.14-10.84L202,128,61.43,61.42a6,6,0,1,1,5.14-10.84l152,72A6,6,0,0,1,222,128Z"/></svg>`;
}
