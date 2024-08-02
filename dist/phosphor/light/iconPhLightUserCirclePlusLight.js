export const iconPhLightUserCirclePlusLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M170,56a6,6,0,0,1,6-6h18V32a6,6,0,0,1,12,0V50h18a6,6,0,0,1,0,12H206V80a6,6,0,0,1-12,0V62H176A6,6,0,0,1,170,56Zm58.59,55A101.9,101.9,0,1,1,145,27.41a6,6,0,1,1-2,11.83A91.66,91.66,0,0,0,128,38,89.95,89.95,0,0,0,62.49,189.64a77.53,77.53,0,0,1,40-31.38,46,46,0,1,1,51,0,77.53,77.53,0,0,1,40,31.38A89.65,89.65,0,0,0,218,128a91.76,91.76,0,0,0-1.24-15,6,6,0,1,1,11.83-2ZM128,154a34,34,0,1,0-34-34A34,34,0,0,0,128,154Zm0,64A89.58,89.58,0,0,0,184.56,198a66,66,0,0,0-113.12,0A89.58,89.58,0,0,0,128,218Z"/></svg>`;
}
