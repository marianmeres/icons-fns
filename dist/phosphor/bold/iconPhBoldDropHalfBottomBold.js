export const iconPhBoldDropHalfBottomBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M134.88,6.17a12,12,0,0,0-13.76,0,259,259,0,0,0-42.18,39C50.85,77.43,36,111.63,36,144a92,92,0,0,0,184,0C220,66.64,138.36,8.6,134.88,6.17ZM191.61,168H64.39a67.1,67.1,0,0,1-3.9-16h135A67.1,67.1,0,0,1,191.61,168ZM96.7,61.29A249.35,249.35,0,0,1,128,31.11a249.35,249.35,0,0,1,31.3,30.18c14,16.19,30.27,39.89,35.2,66.71H61.5C66.43,101.18,82.69,77.48,96.7,61.29ZM128,212a67.78,67.78,0,0,1-48.12-20h96.24A67.78,67.78,0,0,1,128,212Z"/></svg>`;
}
