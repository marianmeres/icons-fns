export const iconPhThinCloudMoonThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172,76A72,72,0,0,0,156,77.81a68,68,0,0,0-52.68-64.09,4,4,0,0,0-4.79,4.8,60.05,60.05,0,0,1-72,72,4,4,0,0,0-4.8,4.8A68.2,68.2,0,0,0,56.17,140.1,48,48,0,0,0,92,220h80a72,72,0,0,0,0-144ZM31.22,99.44A69.46,69.46,0,0,0,40,100a68.07,68.07,0,0,0,68-68,69.74,69.74,0,0,0-.56-8.79A59.66,59.66,0,0,1,148,80v.11a72.27,72.27,0,0,0-44.49,45.28A48.28,48.28,0,0,0,92,124a47.75,47.75,0,0,0-29.61,10.26A60.21,60.21,0,0,1,31.22,99.44ZM172,212H92a40,40,0,1,1,9.43-78.88A71.63,71.63,0,0,0,100,143.77a4,4,0,0,0,8,.46,64.3,64.3,0,0,1,2-12.67c0-.12.07-.24.09-.36A64.06,64.06,0,1,1,172,212Z"/></svg>`;
}