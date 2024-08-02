export const iconPhRegularChartDonut = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,24a8,8,0,0,0-8,8V88a8,8,0,0,0,8,8,32,32,0,1,1-27.72,16,8,8,0,0,0-2.93-10.93l-48.5-28A8,8,0,0,0,37.92,76,104,104,0,1,0,128,24ZM48.09,91.1,83,111.26A48.09,48.09,0,0,0,80,128c0,1.53.08,3,.22,4.52L41.28,143A88.16,88.16,0,0,1,48.09,91.1Zm-2.67,67.31,39-10.44A48.1,48.1,0,0,0,120,175.32v40.31A88.2,88.2,0,0,1,45.42,158.41ZM136,215.63V175.32a48,48,0,0,0,0-94.65V40.36a88,88,0,0,1,0,175.27Z"/></svg>`;
}
