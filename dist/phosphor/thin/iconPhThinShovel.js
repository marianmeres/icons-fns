export const iconPhThinShovel = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M242.83,61.17l-48-48a4,4,0,0,0-5.66,5.66L210.34,40l-76.68,76.69L96.49,79.51a12,12,0,0,0-17,0l-56,56A11.93,11.93,0,0,0,20,144v80a12,12,0,0,0,12,12h80a12,12,0,0,0,8.49-3.51l56-56a12,12,0,0,0,0-17l-37.18-37.17L216,45.66l21.17,21.17a4,4,0,1,0,5.66-5.66Zm-72,104a4,4,0,0,1,0,5.66l-56,56A4,4,0,0,1,112,228H32a4,4,0,0,1-4-4V144a4,4,0,0,1,1.17-2.83l56-56a4,4,0,0,1,5.66,0L128,122.34,85.17,165.17a4,4,0,0,0,5.66,5.66L133.66,128Z"/></svg>`;
}
