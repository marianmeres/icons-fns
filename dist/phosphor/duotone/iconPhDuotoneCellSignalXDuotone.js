export const iconPhDuotoneCellSignalXDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,40V160l-45.66,45.66a8,8,0,0,1-5.65,2.34H32a8,8,0,0,1-5.66-13.66l160-160A8,8,0,0,1,200,40Z" opacity="0.2"/><path d="M213.66,194.34a8,8,0,0,1-11.32,11.32L184,187.31l-18.35,18.35a8,8,0,0,1-11.31-11.32L172.68,176l-18.34-18.35a8,8,0,0,1,11.31-11.31L184,164.68l18.34-18.34a8,8,0,0,1,11.32,11.31L195.31,176ZM120,200H32L192,40v72a8,8,0,0,0,16,0V40a16,16,0,0,0-27.31-11.32l-160,160A16,16,0,0,0,32,216h88a8,8,0,0,0,0-16Z"/></svg>`;
}
