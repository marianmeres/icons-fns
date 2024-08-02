export const iconPhLightDeviceRotateLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204.24,220.24l-24,24a6,6,0,0,1-8.48-8.48L185.51,222H80a22,22,0,0,1-22-22V104a6,6,0,0,1,12,0v96a10,10,0,0,0,10,10H185.51l-13.75-13.76a6,6,0,0,1,8.48-8.48l24,24A6,6,0,0,1,204.24,220.24ZM80,70a6,6,0,0,0,4.24-10.24L70.49,46H176a10,10,0,0,1,10,10v96a6,6,0,0,0,12,0V56a22,22,0,0,0-22-22H70.49L84.24,20.24a6,6,0,0,0-8.48-8.48l-24,24a6,6,0,0,0,0,8.48l24,24A6,6,0,0,0,80,70Z"/></svg>`;
}
