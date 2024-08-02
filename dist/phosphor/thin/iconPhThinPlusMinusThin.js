export const iconPhThinPlusMinusThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M202.83,58.83l-144,144a4,4,0,0,1-5.66-5.66l144-144a4,4,0,1,1,5.66,5.66ZM68,112a4,4,0,0,0,8,0V76h36a4,4,0,0,0,0-8H76V32a4,4,0,0,0-8,0V68H32a4,4,0,0,0,0,8H68Zm156,68H144a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8Z"/></svg>`;
}
