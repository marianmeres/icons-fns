export const iconPhThinPencilSimpleSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M51,37.31A4,4,0,0,0,45,42.69L95.81,98.54l-56.3,56.29A12,12,0,0,0,36,163.31V208a12,12,0,0,0,12,12H92.69a11.93,11.93,0,0,0,8.48-3.51l53.36-53.36L205,218.69a4,4,0,1,0,5.92-5.38ZM95.52,210.83A4.06,4.06,0,0,1,92.69,212H48a4,4,0,0,1-4-4V163.31a4,4,0,0,1,1.17-2.82l56-56,47.94,52.74Zm129-134.63L179.8,31.52a12,12,0,0,0-17,0L121.16,73.19a4,4,0,0,0,5.66,5.65L136,69.66,186.35,120,174.5,131.85a4,4,0,1,0,5.65,5.66l44.34-44.34A12,12,0,0,0,224.49,76.2Zm-5.66,11.31L192,114.34,141.66,64l26.83-26.83a4.1,4.1,0,0,1,5.66,0l44.68,44.69A4,4,0,0,1,218.83,87.51Z"/></svg>`;
}
