export const iconPhThinCloudSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M51,37.31A4,4,0,0,0,45,42.69L86.16,87.93q-1.38,2.55-2.59,5.19A60,60,0,1,0,72,212h88a83.19,83.19,0,0,0,32.88-6.69L205,218.69a4,4,0,1,0,5.92-5.38ZM160,204H72a52,52,0,0,1,0-104,52.92,52.92,0,0,1,8.54.72A84.21,84.21,0,0,0,76,128a4,4,0,0,0,8,0,76,76,0,0,1,7.9-33.76L187.13,199A75.37,75.37,0,0,1,160,204Zm84-76a83.86,83.86,0,0,1-21.34,55.94,4,4,0,1,1-6-5.33A76,76,0,0,0,115,66.75a4,4,0,0,1-4.74-6.45A84,84,0,0,1,244,128Z"/></svg>`;
}
