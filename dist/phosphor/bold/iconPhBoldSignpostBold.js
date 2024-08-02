export const iconPhBoldSignpostBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248.92,104,215.3,66.62A20,20,0,0,0,200.44,60H140V32a12,12,0,0,0-24,0V60H40A20,20,0,0,0,20,80v64a20,20,0,0,0,20,20h76v60a12,12,0,0,0,24,0V164h60.44a20,20,0,0,0,14.86-6.62L248.92,120A12,12,0,0,0,248.92,104Zm-50.26,36H44V84H198.66l25.2,28Z"/></svg>`;
}
