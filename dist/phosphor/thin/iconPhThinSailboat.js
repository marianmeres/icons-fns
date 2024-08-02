export const iconPhThinSailboat = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M243.61,174.27A4,4,0,0,0,240,172H140V140h76a4,4,0,0,0,3-6.69L140,46.45V8a4,4,0,0,0-7.1-2.52l-104,128A4,4,0,0,0,32,140H132v32H16a4,4,0,0,0-3.12,6.5l29.59,37a12,12,0,0,0,9.37,4.5H204.16a12,12,0,0,0,9.37-4.5l29.59-37A4,4,0,0,0,243.61,174.27ZM207,132H140V58.35ZM40.4,132,132,19.27V132Zm166.88,78.5a4,4,0,0,1-3.12,1.5H51.84a4,4,0,0,1-3.12-1.5L24.32,180H231.68Z"/></svg>`;
}
