export const iconPhLightCloudArrowDown = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M246,128a85.27,85.27,0,0,1-17.2,51.6,6,6,0,1,1-9.6-7.2A74,74,0,1,0,86,128a6,6,0,0,1-12,0,85.54,85.54,0,0,1,3.91-25.64A50.68,50.68,0,0,0,72,102a50,50,0,0,0,0,100H96a6,6,0,0,1,0,12H72A62,62,0,1,1,82.43,90.88,86,86,0,0,1,246,128Zm-66.24,43.76L158,193.51V128a6,6,0,0,0-12,0v65.51l-21.76-21.75a6,6,0,0,0-8.48,8.48l32,32a6,6,0,0,0,8.48,0l32-32a6,6,0,0,0-8.48-8.48Z"/></svg>`;
}
