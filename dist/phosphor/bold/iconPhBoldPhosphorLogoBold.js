export const iconPhBoldPhosphorLogoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,104a76.08,76.08,0,0,0-76-76H72A12,12,0,0,0,60,40V168a84.09,84.09,0,0,0,84,84,12,12,0,0,0,12-12V179.89A76.09,76.09,0,0,0,228,104ZM84,85.81,123.48,156H84Zm48,36.38L92.52,52H132ZM85.22,180H132v46.79A60.18,60.18,0,0,1,85.22,180ZM156,155.83V52.17a52,52,0,0,1,0,103.66Z"/></svg>`;
}
