export const iconPhThinDropSimple = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M171,50.37a250.18,250.18,0,0,0-40.73-37.65,4,4,0,0,0-4.58,0A250.18,250.18,0,0,0,85,50.37C58.17,81.21,44,113.58,44,144a84,84,0,0,0,168,0C212,113.58,197.83,81.21,171,50.37ZM128,220a76.08,76.08,0,0,1-76-76c0-35.9,21.15-67.8,38.9-88.23A254,254,0,0,1,128,21a254,254,0,0,1,37.1,34.81C182.85,76.2,204,108.1,204,144A76.08,76.08,0,0,1,128,220Z"/></svg>`;
}
