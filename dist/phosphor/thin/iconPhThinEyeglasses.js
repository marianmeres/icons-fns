export const iconPhThinEyeglasses = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,44a4,4,0,0,0,0,8,20,20,0,0,1,20,20v68a40,40,0,0,0-71.2,16H107.2A40,40,0,0,0,36,140V72A20,20,0,0,1,56,52a4,4,0,0,0,0-8A28,28,0,0,0,28,72v92a40,40,0,0,0,80,0h40a40,40,0,0,0,80,0V72A28,28,0,0,0,200,44ZM68,196a32,32,0,1,1,32-32A32,32,0,0,1,68,196Zm120,0a32,32,0,1,1,32-32A32,32,0,0,1,188,196Z"/></svg>`;
}
