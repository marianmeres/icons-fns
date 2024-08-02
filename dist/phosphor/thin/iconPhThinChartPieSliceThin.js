export const iconPhThinChartPieSliceThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M100,109.5v-72a4,4,0,0,0-5.33-3.77,100,100,0,0,0-65,112.5A4,4,0,0,0,35.6,149L98,113A4,4,0,0,0,100,109.5Zm-8-2.31L36.67,139.11A92,92,0,0,1,92,43.34ZM128,28a4,4,0,0,0-4,4v94.12L43.2,173.18a4,4,0,0,0-1.43,5.49A100,100,0,1,0,128,28Zm0,192a92.47,92.47,0,0,1-77.22-42L130,131.88a4,4,0,0,0,2-3.46V36.09A92,92,0,0,1,128,220Z"/></svg>`;
}
