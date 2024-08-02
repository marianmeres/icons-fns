export const iconPhThinArrowElbowLeftThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M234.83,98.83l-96,96a4,4,0,0,1-5.66,0L28,89.66V152a4,4,0,0,1-8,0V80a4,4,0,0,1,4-4H96a4,4,0,0,1,0,8H33.66L136,186.34l93.17-93.17a4,4,0,1,1,5.66,5.66Z"/></svg>`;
}
