export const iconPhThinArrowsLeftRightThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M210.83,173.17a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66-5.66L198.34,180H48a4,4,0,0,1,0-8H198.34l-25.17-25.17a4,4,0,0,1,5.66-5.66ZM77.17,114.83a4,4,0,0,0,5.66-5.66L57.66,84H208a4,4,0,0,0,0-8H57.66L82.83,50.83a4,4,0,0,0-5.66-5.66l-32,32a4,4,0,0,0,0,5.66Z"/></svg>`;
}
