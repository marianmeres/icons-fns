export const iconPhLightUserCircleDashedLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M98.19,36.54a6,6,0,0,1,4.31-7.31,102,102,0,0,1,51,0,6,6,0,1,1-3,11.61,90,90,0,0,0-45,0A6,6,0,0,1,98.19,36.54Zm-64.3,71.54a5.88,5.88,0,0,0,1.6.22,6,6,0,0,0,5.78-4.4A90,90,0,0,1,63.78,65a6,6,0,1,0-8.56-8.41A102.12,102.12,0,0,0,29.7,100.7,6,6,0,0,0,33.89,108.08ZM150.5,215.15a90,90,0,0,1-45,0,6,6,0,1,0-3,11.61,102,102,0,0,0,51,0,6,6,0,0,0-3-11.62Zm64.22-111.24a6,6,0,0,0,5.78,4.4,5.88,5.88,0,0,0,1.6-.22,6,6,0,0,0,4.18-7.38,102,102,0,0,0-25.49-44.18,6,6,0,0,0-8.55,8.41A90.11,90.11,0,0,1,214.72,103.91ZM226.3,155.3a101.75,101.75,0,0,1-30.08,48.53,6,6,0,0,1-9.37-1.74,66,66,0,0,0-117.7,0,6,6,0,0,1-4.26,3.18,5.74,5.74,0,0,1-1.09.1,6,6,0,0,1-4-1.54A101.74,101.74,0,0,1,29.7,155.3a6,6,0,1,1,11.56-3.21,89.79,89.79,0,0,0,21.2,37.59,77.56,77.56,0,0,1,40-31.43,46,46,0,1,1,51,0,77.56,77.56,0,0,1,40,31.43,89.7,89.7,0,0,0,21.2-37.58,6,6,0,1,1,11.56,3.2ZM128,154a34,34,0,1,0-34-34A34,34,0,0,0,128,154Z"/></svg>`;
}
