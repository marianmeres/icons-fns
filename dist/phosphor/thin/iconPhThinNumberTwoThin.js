export const iconPhThinNumberTwoThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172,208a4,4,0,0,1-4,4H88a4,4,0,0,1-3.2-6.4l71.94-95.92A36,36,0,1,0,99.25,66.34,36.62,36.62,0,0,0,95,73.61a4,4,0,0,1-7.33-3.21,44.42,44.42,0,0,1,5.2-8.87,44,44,0,0,1,70.28,53L96,204h72A4,4,0,0,1,172,208Z"/></svg>`;
}
