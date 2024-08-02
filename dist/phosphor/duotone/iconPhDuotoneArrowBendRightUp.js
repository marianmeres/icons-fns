export const iconPhDuotoneArrowBendRightUp = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,80H104l48-48Z" opacity="0.2"/><path d="M205.66,74.34l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,104,88h40v40a88.1,88.1,0,0,1-88,88,8,8,0,0,0,0,16A104.11,104.11,0,0,0,160,128V88h40a8,8,0,0,0,5.66-13.66ZM123.31,72,152,43.31,180.69,72Z"/></svg>`;
}
