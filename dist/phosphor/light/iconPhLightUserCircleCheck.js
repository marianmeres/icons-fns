export const iconPhLightUserCircleCheck = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M221.68,106.08a6,6,0,0,0-4.92,6.91A91.66,91.66,0,0,1,218,128a89.65,89.65,0,0,1-24.49,61.64,77.53,77.53,0,0,0-40-31.38,46,46,0,1,0-51,0,77.53,77.53,0,0,0-40,31.38A89.95,89.95,0,0,1,128,38a91.57,91.57,0,0,1,15,1.24,6,6,0,1,0,2-11.83,101.9,101.9,0,1,0,83.6,83.6A6,6,0,0,0,221.68,106.08ZM94,120a34,34,0,1,1,34,34A34,34,0,0,1,94,120ZM71.44,198a66,66,0,0,1,113.12,0,89.8,89.8,0,0,1-113.12,0ZM236.24,44.24l-32,32a6,6,0,0,1-8.48,0l-16-16a6,6,0,0,1,8.48-8.48L200,63.51l27.76-27.75a6,6,0,0,1,8.48,8.48Z"/></svg>`;
}
