export const iconPhLightUserMinusLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M254,136a6,6,0,0,1-6,6H200a6,6,0,0,1,0-12h48A6,6,0,0,1,254,136Zm-57.41,60.14a6,6,0,1,1-9.18,7.72C166.9,179.45,138.69,166,108,166s-58.89,13.45-79.41,37.86a6,6,0,0,1-9.18-7.72C35.14,177.41,55,164.48,77,158.26a66,66,0,1,1,62,0C161,164.48,180.86,177.41,196.59,196.14ZM108,154a54,54,0,1,0-54-54A54.06,54.06,0,0,0,108,154Z"/></svg>`;
}
