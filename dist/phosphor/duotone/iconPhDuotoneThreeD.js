export const iconPhDuotoneThreeD = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,48V208H32V48Z" opacity="0.2"/><path d="M96,148a20,20,0,0,0-20-20,8,8,0,0,1-6.55-12.59L88.63,88H56a8,8,0,0,1,0-16h48a8,8,0,0,1,6.55,12.59l-21,30A36,36,0,0,1,76,184a35.71,35.71,0,0,1-25.71-10.81A8,8,0,1,1,61.71,162,20,20,0,0,0,96,148Zm64-76a56,56,0,0,1,0,112H136a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8Zm0,16H144v80h16a40,40,0,0,0,0-80ZM32,56H224a8,8,0,0,0,0-16H32a8,8,0,0,0,0,16ZM224,200H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Z"/></svg>`;
}
