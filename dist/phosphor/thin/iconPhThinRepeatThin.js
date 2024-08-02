export const iconPhThinRepeatThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M28,128A68.07,68.07,0,0,1,96,60H214.34L197.17,42.83a4,4,0,0,1,5.66-5.66l24,24a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L214.34,68H96a60.07,60.07,0,0,0-60,60,4,4,0,0,1-8,0Zm196-4a4,4,0,0,0-4,4,60.07,60.07,0,0,1-60,60H41.66l17.17-17.17a4,4,0,0,0-5.66-5.66l-24,24a4,4,0,0,0,0,5.66l24,24a4,4,0,1,0,5.66-5.66L41.66,196H160a68.07,68.07,0,0,0,68-68A4,4,0,0,0,224,124Z"/></svg>`;
}
