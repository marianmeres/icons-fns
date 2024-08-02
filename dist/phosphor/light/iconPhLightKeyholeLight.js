export const iconPhLightKeyholeLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm38-106a38,38,0,1,0-61.5,29.86l-14,31.72A6,6,0,0,0,96,182h64a6,6,0,0,0,5.49-8.42l-14-31.72A38.16,38.16,0,0,0,166,112Zm-25,22.53a6,6,0,0,0-2.49,7.61L150.8,170H105.2l12.29-27.86a6,6,0,0,0-2.49-7.61,26,26,0,1,1,26,0Z"/></svg>`;
}
