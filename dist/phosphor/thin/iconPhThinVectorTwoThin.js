export const iconPhThinVectorTwoThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M226.83,194.83l-32,32a4,4,0,0,1-5.66-5.66L214.34,196H80a4,4,0,0,1-4-4V49.66L50.83,74.83a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0l32,32a4,4,0,0,1-5.66,5.66L84,49.66V188H214.34l-25.17-25.17a4,4,0,0,1,5.66-5.66l32,32A4,4,0,0,1,226.83,194.83Z"/></svg>`;
}
