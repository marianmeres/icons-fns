export const iconPhBoldGenderIntersex = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,20H168a12,12,0,0,0,0,24h11L163.36,59.67A68,68,0,1,0,108,178.92V192H88a12,12,0,0,0,0,24h20v16a12,12,0,0,0,24,0V216h20a12,12,0,0,0,0-24H132V178.92A67.93,67.93,0,0,0,178.9,78.08L196,61V72a12,12,0,0,0,24,0V32A12,12,0,0,0,208,20ZM120,156a44,44,0,1,1,44-44A44.05,44.05,0,0,1,120,156Z"/></svg>`;
}
