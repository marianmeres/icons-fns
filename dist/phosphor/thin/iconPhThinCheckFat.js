export const iconPhThinCheckFat = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240.47,71.09l-24-23.58a12,12,0,0,0-17,0L104,141.83l-39.5-38.32a12,12,0,0,0-17,0l-24,24a12,12,0,0,0,0,17l71.61,72a12,12,0,0,0,17,0L240.49,88.08A12,12,0,0,0,240.47,71.09Zm-5.63,11.34L106.43,210.83a4,4,0,0,1-5.65,0l-71.61-72a4,4,0,0,1,0-5.66l24-24A3.94,3.94,0,0,1,56,108a4.11,4.11,0,0,1,2.89,1.21l42.35,41.08a4,4,0,0,0,5.59,0l98.37-97.1a4,4,0,0,1,5.68,0l24,23.58A4,4,0,0,1,234.84,82.43Z"/></svg>`;
}
