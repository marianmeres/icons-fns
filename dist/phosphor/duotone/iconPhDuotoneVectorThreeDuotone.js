export const iconPhDuotoneVectorThreeDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,40v96l-67.31,67.31A16,16,0,0,1,153.37,208H48V102.63a16,16,0,0,1,4.69-11.32L120,24h96A16,16,0,0,1,232,40Z" opacity="0.2"/><path d="M237.66,141.66l-32,32a8,8,0,0,1-11.32-11.32L212.69,144H123.31l-56,56H96a8,8,0,0,1,0,16H48a8,8,0,0,1-8-8V160a8,8,0,0,1,16,0v28.69l56-56V43.31L93.66,61.66A8,8,0,0,1,82.34,50.34l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32L128,43.31V128h84.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,237.66,141.66Z"/></svg>`;
}
