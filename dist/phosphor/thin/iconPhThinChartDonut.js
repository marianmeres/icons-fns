export const iconPhThinChartDonut = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28a4,4,0,0,0-4,4V88a4,4,0,0,0,4,4,36,36,0,1,1-31.18,18,4,4,0,0,0-1.47-5.47l-48.5-28A4,4,0,0,0,41.39,78,100,100,0,1,0,128,28ZM46.38,85.5l41.67,24a43.86,43.86,0,0,0-3.4,25.93L38.18,147.93a92.19,92.19,0,0,1,8.2-62.43Zm-6.13,70.15L86.71,143.2A44.11,44.11,0,0,0,124,171.81v48.1A92.17,92.17,0,0,1,40.25,155.65ZM132,219.91v-48.1a44,44,0,0,0,0-87.63V36.09a92,92,0,0,1,0,183.82Z"/></svg>`;
}
