export const iconPhLightTennisBall = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200.16,55.88a102,102,0,1,0,0,144.24A101.4,101.4,0,0,0,200.16,55.88ZM64.33,64.36a89.62,89.62,0,0,1,57.25-26.07A89.32,89.32,0,0,1,95.46,95.47a89.38,89.38,0,0,1-57.21,26.11A89.61,89.61,0,0,1,64.33,64.36ZM38.2,133.63A101.36,101.36,0,0,0,104,104a101.24,101.24,0,0,0,29.68-65.72,89.76,89.76,0,0,1,84.17,84.13,102,102,0,0,0-95.43,95.39A89.76,89.76,0,0,1,38.2,133.63Zm153.47,58a89.63,89.63,0,0,1-57.25,26.06,89.94,89.94,0,0,1,83.33-83.28A89.61,89.61,0,0,1,191.67,191.64Z"/></svg>`;
}
