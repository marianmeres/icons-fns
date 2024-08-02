export const iconPhLightCookingPotLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M90,48V16a6,6,0,0,1,12,0V48a6,6,0,0,1-12,0Zm38,6a6,6,0,0,0,6-6V16a6,6,0,0,0-12,0V48A6,6,0,0,0,128,54Zm32,0a6,6,0,0,0,6-6V16a6,6,0,0,0-12,0V48A6,6,0,0,0,160,54Zm91.6,46.8L222,123v61a30,30,0,0,1-30,30H64a30,30,0,0,1-30-30V123L4.4,100.8a6,6,0,0,1,7.2-9.6L34,108V80a6,6,0,0,1,6-6H216a6,6,0,0,1,6,6v28l22.4-16.8a6,6,0,0,1,7.2,9.6ZM210,86H46v98a18,18,0,0,0,18,18H192a18,18,0,0,0,18-18Z"/></svg>`;
}
