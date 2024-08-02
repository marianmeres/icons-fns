export const iconPhThinSortAscendingThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M124,128a4,4,0,0,1-4,4H48a4,4,0,0,1,0-8h72A4,4,0,0,1,124,128ZM48,68H184a4,4,0,0,0,0-8H48a4,4,0,0,0,0,8Zm56,120H48a4,4,0,0,0,0,8h56a4,4,0,0,0,0-8Zm122.83-22.83a4,4,0,0,0-5.66,0L188,198.34V112a4,4,0,0,0-8,0v86.34l-33.17-33.17a4,4,0,0,0-5.66,5.66l40,40a4,4,0,0,0,5.66,0l40-40A4,4,0,0,0,226.83,165.17Z"/></svg>`;
}
