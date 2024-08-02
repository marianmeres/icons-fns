export const iconPhFillNumberZero = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M157.68,88.39C164.34,98.52,168,112.59,168,128s-3.66,29.47-10.32,39.61C150.55,178.49,140.56,184,128,184s-22.55-5.51-29.68-16.39C91.66,157.47,88,143.41,88,128s3.66-29.48,10.32-39.61C105.45,77.51,115.44,72,128,72S150.55,77.51,157.68,88.39ZM216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Zm-32,88c0-18.49-4.6-35.68-12.94-48.39C160.92,64.16,146,56,128,56S95.08,64.16,84.94,79.61C76.6,92.32,72,109.51,72,128s4.6,35.68,12.94,48.39C95.08,191.84,110,200,128,200s32.92-8.16,43.06-23.61C179.4,163.68,184,146.49,184,128Z"/></svg>`;
}
