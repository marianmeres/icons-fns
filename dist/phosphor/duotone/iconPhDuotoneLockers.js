export const iconPhDuotoneLockers = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,48V200H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"/><path d="M192,72a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h24A8,8,0,0,1,192,72Zm-8,24H160a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16ZM72,80H96a8,8,0,0,0,0-16H72a8,8,0,0,0,0,16ZM96,96H72a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16ZM224,48V224a8,8,0,0,1-16,0V208H136v16a8,8,0,0,1-16,0V208H48v16a8,8,0,0,1-16,0V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM120,192V48H48V192Zm16,0h72V48H136Z"/></svg>`;
}
