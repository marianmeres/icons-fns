export const iconPhBoldBezierCurveBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224.28,141a100.61,100.61,0,0,0-31.4-49H240a12,12,0,0,0,0-24H161.94a36,36,0,0,0-67.88,0H16a12,12,0,0,0,0,24H63.12a100.61,100.61,0,0,0-31.4,49A36,36,0,1,0,56,143.74,76.66,76.66,0,0,1,97.15,98.53a36,36,0,0,0,61.7,0A76.66,76.66,0,0,1,200,143.74,36,36,0,1,0,224.28,141ZM40,188a12,12,0,1,1,12-12A12,12,0,0,1,40,188Zm88-96a12,12,0,1,1,12-12A12,12,0,0,1,128,92Zm88,96a12,12,0,1,1,12-12A12,12,0,0,1,216,188Z"/></svg>`;
}
