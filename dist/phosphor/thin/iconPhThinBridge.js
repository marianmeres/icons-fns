export const iconPhThinBridge = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,164H196V88.09a67.81,67.81,0,0,0,34.5,31,4,4,0,1,0,3-7.42A59.77,59.77,0,0,1,196,56a4,4,0,0,0-8,0A60,60,0,0,1,68,56a4,4,0,0,0-8,0,59.77,59.77,0,0,1-37.5,55.64,4,4,0,0,0,3,7.42,67.81,67.81,0,0,0,34.5-31V164H24a4,4,0,0,0,0,8H60v28a4,4,0,0,0,8,0V172H188v28a4,4,0,0,0,8,0V172h36a4,4,0,0,0,0-8Zm-84-43v43H108V121a68,68,0,0,0,40,0ZM68,88a68.43,68.43,0,0,0,32,30v46H68Zm88,76V118a68.43,68.43,0,0,0,32-30v76Z"/></svg>`;
}
