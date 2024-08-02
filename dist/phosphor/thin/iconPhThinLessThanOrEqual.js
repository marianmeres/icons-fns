export const iconPhThinLessThanOrEqual = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M44,104a4,4,0,0,1,2.62-3.75l152-56a4,4,0,1,1,2.76,7.5L59.57,104l141.81,52.25A4,4,0,0,1,200,164a3.91,3.91,0,0,1-1.38-.25l-152-56A4,4,0,0,1,44,104Zm156,92H48a4,4,0,0,0,0,8H200a4,4,0,0,0,0-8Z"/></svg>`;
}
