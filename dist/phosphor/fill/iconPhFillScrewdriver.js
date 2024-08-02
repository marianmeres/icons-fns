export const iconPhFillScrewdriver = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M233.23,22.75a50.46,50.46,0,0,0-71.31,0L108.68,76A15.92,15.92,0,0,0,104,87.3V104H87.17a16.14,16.14,0,0,0-9.66,3.24,8,8,0,0,0-.82.72l-8,8a16,16,0,0,0,0,22.63l18.7,18.71-77,77.05a8,8,0,0,0,11.32,11.32l77-77.06,18.71,18.71a16,16,0,0,0,22.62,0l8-8a8.08,8.08,0,0,0,.72-.83,16,16,0,0,0,3.25-9.66V152h16.69A15.86,15.86,0,0,0,180,147.3l53.23-53.23a50.43,50.43,0,0,0,0-71.32ZM205.66,61.64l-56,56a8,8,0,0,1-11.32-11.31l56-56a8,8,0,0,1,11.32,11.32Z"/></svg>`;
}
