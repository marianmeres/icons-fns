export const iconPhThinGenderTransgenderThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,36H168a4,4,0,0,0,0,8h38.34L168,82.35,146.83,61.18a4,4,0,1,0-5.66,5.65L162.34,88l-21.17,21.18a68.16,68.16,0,1,0,5.65,5.66L168,93.67l21.17,21.17a4,4,0,1,0,5.66-5.66L173.66,88,212,49.66V88a4,4,0,0,0,8,0V40A4,4,0,0,0,216,36ZM138.43,202.45A60,60,0,1,1,156,160,60.07,60.07,0,0,1,138.43,202.45Z"/></svg>`;
}
