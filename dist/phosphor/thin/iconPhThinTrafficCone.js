export const iconPhThinTrafficCone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,212H210.84L149.65,36.06A12,12,0,0,0,138.31,28H117.69a12,12,0,0,0-11.34,8.06L45.16,212H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM92.58,100h70.84l19.47,56H73.11Zm21.33-61.31A4,4,0,0,1,117.69,36h20.62a4,4,0,0,1,3.78,2.69L160.63,92H95.37ZM70.32,164H185.68l16.69,48H53.63Z"/></svg>`;
}
