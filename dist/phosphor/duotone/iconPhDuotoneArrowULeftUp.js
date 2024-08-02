export const iconPhDuotoneArrowULeftUp = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M136,80H40L88,32Z" opacity="0.2"/><path d="M200,72a8,8,0,0,0-8,8v88a48,48,0,0,1-96,0V88h40a8,8,0,0,0,5.66-13.66l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,40,88H80v80a64,64,0,0,0,128,0V80A8,8,0,0,0,200,72ZM88,43.31,116.69,72H59.31Z"/></svg>`;
}
