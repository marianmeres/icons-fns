export const iconPhLightArrowElbowRightDown = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228.24,164.24l-48,48a6,6,0,0,1-8.48,0l-48-48a6,6,0,1,1,8.48-8.48L170,193.51V70H32a6,6,0,0,1,0-12H176a6,6,0,0,1,6,6V193.51l37.76-37.75a6,6,0,0,1,8.48,8.48Z"/></svg>`;
}
