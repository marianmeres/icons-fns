export const iconPhLightArrowsInLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M146,104V64a6,6,0,0,1,12,0V89.51l45.76-45.75a6,6,0,0,1,8.48,8.48L166.48,98H192a6,6,0,0,1,0,12H152A6,6,0,0,1,146,104Zm-42,42H64a6,6,0,0,0,0,12H89.52L43.76,203.76a6,6,0,1,0,8.48,8.48L98,166.48V192a6,6,0,0,0,12,0V152A6,6,0,0,0,104,146Zm62.48,12H192a6,6,0,0,0,0-12H152a6,6,0,0,0-6,6v40a6,6,0,0,0,12,0V166.48l45.76,45.76a6,6,0,0,0,8.48-8.48ZM104,58a6,6,0,0,0-6,6V89.51L52.24,43.76a6,6,0,0,0-8.48,8.48L89.52,98H64a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V64A6,6,0,0,0,104,58Z"/></svg>`;
}
