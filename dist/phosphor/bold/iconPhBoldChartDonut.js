export const iconPhBoldChartDonut = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20a12,12,0,0,0-12,12V88a12,12,0,0,0,12,12,28,28,0,1,1-24.26,14A12,12,0,0,0,99.35,97.6l-48.5-28A12,12,0,0,0,34.46,74,108,108,0,1,0,128,20ZM50,96.81l28.2,16.28A52.08,52.08,0,0,0,76,128c0,.5,0,1,0,1.5l-31.43,8.42A83.21,83.21,0,0,1,44,128,84.35,84.35,0,0,1,50,96.81Zm.83,64.3,31.43-8.43A52.2,52.2,0,0,0,116,178.59v32.54A84.26,84.26,0,0,1,50.81,161.11Zm89.19,50V178.59A52,52,0,0,0,140,77.4V44.85a84,84,0,0,1,0,166.28Z"/></svg>`;
}
