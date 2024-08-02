export const iconPhBoldCellTowerBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M138.67,86.51a12,12,0,0,0-21.34,0l-72,140a12,12,0,1,0,21.34,11l11-21.49H178.28l11.05,21.49a12,12,0,1,0,21.34-11ZM128,118.24,145.36,152H110.64ZM90.07,192l8.22-16h59.42l8.22,16ZM174.51,68.73a12,12,0,1,1-21.45,10.75,28,28,0,0,0-50.37.52A12,12,0,1,1,81,69.7,52.28,52.28,0,0,1,128,40,51.74,51.74,0,0,1,174.51,68.73Zm-124.58,76a92,92,0,1,1,156.14,0A12,12,0,0,1,185.71,132a68,68,0,1,0-115.42,0A12,12,0,0,1,49.93,144.7Z"/></svg>`;
}
