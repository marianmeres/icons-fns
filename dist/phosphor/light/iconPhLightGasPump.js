export const iconPhLightGasPump = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M239.56,71.07,220.24,51.76a6,6,0,0,0-8.48,8.48l19.31,19.32A9.93,9.93,0,0,1,234,86.63V168a10,10,0,0,1-20,0V128a22,22,0,0,0-22-22H174V56a22,22,0,0,0-22-22H72A22,22,0,0,0,50,56V210H32a6,6,0,0,0,0,12H192a6,6,0,0,0,0-12H174V118h18a10,10,0,0,1,10,10v40a22,22,0,0,0,44,0V86.63A21.88,21.88,0,0,0,239.56,71.07ZM62,210V56A10,10,0,0,1,72,46h80a10,10,0,0,1,10,10V210Zm80-98a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h48A6,6,0,0,1,142,112Z"/></svg>`;
}
