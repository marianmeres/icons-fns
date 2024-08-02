export const iconPhThinGrainsSlashThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M51,37.31A4,4,0,0,0,45,42.69L61.81,61.13A84.83,84.83,0,0,0,48,60a4,4,0,0,0-4,4v80a84.09,84.09,0,0,0,84,84h0a83.82,83.82,0,0,0,61.33-26.6L205,218.69a4,4,0,1,0,5.92-5.38ZM71.39,71.68l70.06,77.06A84.23,84.23,0,0,0,128,174.41,84.17,84.17,0,0,0,52,116.1v-48A75.86,75.86,0,0,1,71.39,71.68ZM124,219.9A76.11,76.11,0,0,1,52,144V124.1A76.11,76.11,0,0,1,124,200Zm8,0V200a76,76,0,0,1,14.94-45.22l37,40.68A75.86,75.86,0,0,1,132,219.9ZM212,144a84.32,84.32,0,0,1-3,22.34,4,4,0,0,1-3.86,2.94,3.86,3.86,0,0,1-1.06-.14,4,4,0,0,1-2.8-4.92A76,76,0,0,0,204,144V124.1a74.9,74.9,0,0,0-30.37,8.1,4,4,0,1,1-3.62-7.14,82.94,82.94,0,0,1,34-9v-48a76.32,76.32,0,0,0-57.59,31.35,4,4,0,1,1-6.48-4.69,84.14,84.14,0,0,1,27-24C156.88,46.53,134.48,32.28,128,28.56a103.64,103.64,0,0,0-26.45,22,4,4,0,0,1-6.11-5.17,108.09,108.09,0,0,1,30.77-25,4,4,0,0,1,3.58,0c1.32.66,31.31,16,44.33,46.75A83.91,83.91,0,0,1,208,60a4,4,0,0,1,4,4Z"/></svg>`;
}
