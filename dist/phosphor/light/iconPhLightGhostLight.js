export const iconPhLightGhostLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M110,116a10,10,0,1,1-10-10A10,10,0,0,1,110,116Zm46-10a10,10,0,1,0,10,10A10,10,0,0,0,156,106Zm66,14v96a6,6,0,0,1-9.8,4.64l-25.53-20.89-25.54,20.89a6,6,0,0,1-7.6,0L128,199.75l-25.53,20.89a6,6,0,0,1-7.6,0L69.33,199.75,43.8,220.64A6,6,0,0,1,34,216V120a94,94,0,0,1,188,0Zm-12,0a82,82,0,0,0-164,0v83.34l19.53-16a6,6,0,0,1,7.6,0l25.54,20.89,25.53-20.89a6,6,0,0,1,7.6,0l25.53,20.89,25.54-20.89a6,6,0,0,1,7.6,0l19.53,16Z"/></svg>`;
}
