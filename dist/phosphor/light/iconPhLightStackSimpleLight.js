export const iconPhLightStackSimpleLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M13,109.21l112,64a6,6,0,0,0,6,0l112-64a6,6,0,0,0,0-10.42l-112-64a6,6,0,0,0-6,0l-112,64a6,6,0,0,0,0,10.42Zm115-62.3L227.91,104,128,161.09,28.09,104ZM245.21,141a6,6,0,0,1-2.23,8.19l-112,64a6,6,0,0,1-6,0l-112-64a6,6,0,0,1,6-10.42l109,62.3,109-62.3A6,6,0,0,1,245.21,141Z"/></svg>`;
}
