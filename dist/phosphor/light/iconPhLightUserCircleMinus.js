export const iconPhLightUserCircleMinus = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M170,56a6,6,0,0,1,6-6h48a6,6,0,0,1,0,12H176A6,6,0,0,1,170,56Zm54.19,38A101.9,101.9,0,1,1,145,27.41a6,6,0,1,1-2,11.83A91.66,91.66,0,0,0,128,38,89.95,89.95,0,0,0,62.49,189.64a77.53,77.53,0,0,1,40-31.38,46,46,0,1,1,51,0,77.53,77.53,0,0,1,40,31.38A90,90,0,0,0,212.88,98a6,6,0,1,1,11.31-4ZM128,154a34,34,0,1,0-34-34A34,34,0,0,0,128,154Zm0,64A89.58,89.58,0,0,0,184.56,198a66,66,0,0,0-113.12,0A89.58,89.58,0,0,0,128,218Z"/></svg>`;
}
