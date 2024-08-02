export const iconPhBoldCircleHalfTilt = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204.37,51.6A108.08,108.08,0,1,0,236,128,108.09,108.09,0,0,0,204.37,51.6ZM176,197a83.43,83.43,0,0,1-16,8.75V113l16-16ZM68.6,68.58A84.08,84.08,0,0,1,178.3,60.7L60.72,178.33A84.08,84.08,0,0,1,68.6,68.58ZM96,177v28.69A83.63,83.63,0,0,1,77.7,195.3Zm24,34.62V153l16-16v74.64A84.68,84.68,0,0,1,120,211.62Zm80-40.27V84.65a84.24,84.24,0,0,1,0,86.7Z"/></svg>`;
}
