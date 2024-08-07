export const iconPhDuotoneArrowElbowRightUp = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,96H120l48-48Z" opacity="0.2"/><path d="M221.66,90.34l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,120,104h40v80H24a8,8,0,0,0,0,16H168a8,8,0,0,0,8-8V104h40a8,8,0,0,0,5.66-13.66ZM139.31,88,168,59.31,196.69,88Z"/></svg>`;
}
