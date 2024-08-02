export const iconPhLightUserSwitch = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M252.24,132.24l-24,24a6,6,0,0,1-8.48,0l-24-24a6,6,0,1,1,8.48-8.48L218,137.51V128A90,90,0,0,0,54.87,75.5a6,6,0,1,1-9.74-7A102,102,0,0,1,230,128v9.51l13.76-13.75a6,6,0,1,1,8.48,8.48ZM210.85,187.5A102,102,0,0,1,26,128v-9.51L12.24,132.24a6,6,0,0,1-8.48-8.48l24-24a6,6,0,0,1,8.48,0l24,24a6,6,0,1,1-8.48,8.48L38,118.49V128a89.65,89.65,0,0,0,24.49,61.64,77.53,77.53,0,0,1,40-31.38,46,46,0,1,1,51,0,77.49,77.49,0,0,1,40,31.41,89.35,89.35,0,0,0,7.58-9.17,6,6,0,1,1,9.74,7ZM128,154a34,34,0,1,0-34-34A34,34,0,0,0,128,154Zm0,64a90.24,90.24,0,0,0,56.57-20,66,66,0,0,0-113.13,0A89.58,89.58,0,0,0,128,218Z"/></svg>`;
}
