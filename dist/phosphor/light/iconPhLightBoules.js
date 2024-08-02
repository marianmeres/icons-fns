export const iconPhLightBoules = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm59.22,34.29L60.29,187.22a90.21,90.21,0,0,1-12.53-18.49l121-121A90.21,90.21,0,0,1,187.22,60.29Zm8.49,8.49a90.21,90.21,0,0,1,12.53,18.49l-121,121a90.21,90.21,0,0,1-18.49-12.53ZM128,38a89.67,89.67,0,0,1,28.79,4.72L42.72,156.79A90,90,0,0,1,128,38Zm0,180a89.67,89.67,0,0,1-28.79-4.72L213.28,99.21A90,90,0,0,1,128,218Z"/></svg>`;
}
