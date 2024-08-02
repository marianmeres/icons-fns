export const iconPhThinGreaterThan = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,128a4,4,0,0,1-2.29,3.62l-152,72A3.85,3.85,0,0,1,64,204a4,4,0,0,1-1.71-7.62L206.66,128,62.29,59.62a4,4,0,0,1,3.42-7.23l152,72A4,4,0,0,1,220,128Z"/></svg>`;
}
