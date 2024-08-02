export const iconPhThinStoolThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M196,64V40a12,12,0,0,0-12-12H72A12,12,0,0,0,60,40V64A12,12,0,0,0,72,76H83.32L60.05,223.38A4,4,0,0,0,63.38,228,4.46,4.46,0,0,0,64,228,4,4,0,0,0,68,224.62L76.26,172H179.74l8.31,52.62A4,4,0,0,0,192,228a4.46,4.46,0,0,0,.63-.05,4,4,0,0,0,3.33-4.57L172.68,76H184A12,12,0,0,0,196,64ZM68,64V40a4,4,0,0,1,4-4H184a4,4,0,0,1,4,4V64a4,4,0,0,1-4,4H72A4,4,0,0,1,68,64ZM178.48,164h-101l13.9-88h73.16Z"/></svg>`;
}
