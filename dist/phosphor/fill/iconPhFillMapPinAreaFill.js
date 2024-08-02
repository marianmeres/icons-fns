export const iconPhFillMapPinAreaFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M124,175a8,8,0,0,0,7.94,0c2.45-1.41,60-35,60-94.95A64,64,0,0,0,64,80C64,140,121.58,173.54,124,175ZM128,56a24,24,0,1,1-24,24A24,24,0,0,1,128,56ZM240,184c0,31.18-57.71,48-112,48S16,215.18,16,184c0-14.59,13.22-27.51,37.23-36.37a8,8,0,0,1,5.54,15C42.26,168.74,32,176.92,32,184c0,13.36,36.52,32,96,32s96-18.64,96-32c0-7.08-10.26-15.26-26.77-21.36a8,8,0,0,1,5.54-15C226.78,156.49,240,169.41,240,184Z"/></svg>`;
}
