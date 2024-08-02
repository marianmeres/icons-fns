export const iconPhThinNotSupersetOf = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,196H71.59l29.09-32H152A60,60,0,0,0,194.07,61.27L211,42.69A4,4,0,0,0,205,37.31L188,56a59.73,59.73,0,0,0-36-12H56a4,4,0,0,0,0,8h96a51.75,51.75,0,0,1,30.6,10L97.14,156H56a4,4,0,0,0,0,8H89.87L45,213.31A4,4,0,1,0,51,218.69L64.31,204H208a4,4,0,0,0,0-8ZM188.69,67.19A52,52,0,0,1,152,156H108Z"/></svg>`;
}
