export const iconPhDuotoneFourK = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,48V208H32V48Z" opacity="0.2"/><path d="M24,48a8,8,0,0,1,8-8H224a8,8,0,0,1,0,16H32A8,8,0,0,1,24,48ZM224,200H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM144,72a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V147l13.09-15,28,48A8,8,0,1,0,206.91,172l-30.7-52.63L206,85.27a8,8,0,1,0-12-10.54l-42,48V80A8,8,0,0,0,144,72ZM88,176V160H40a8,8,0,0,1-6.31-12.91l56-72A8,8,0,0,1,104,80v64h8a8,8,0,0,1,0,16h-8v16a8,8,0,0,1-16,0Zm0-32V103.32L56.36,144Z"/></svg>`;
}
