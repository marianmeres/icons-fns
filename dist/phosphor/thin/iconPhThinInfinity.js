export const iconPhThinInfinity = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244,128a52,52,0,0,1-88.77,36.77l-.17-.18L95,96.8a44,44,0,1,0,0,62.4l8.6-9.72a4,4,0,0,1,6,5.3l-8.68,9.81-.17.18a52,52,0,1,1,0-73.54l.17.18,60,67.79a44,44,0,1,0,0-62.4l-8.6,9.72a4,4,0,0,1-6-5.3l8.68-9.81.17-.18A52,52,0,0,1,244,128Z"/></svg>`;
}
