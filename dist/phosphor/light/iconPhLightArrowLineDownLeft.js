export const iconPhLightArrowLineDownLeft = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230,48a6,6,0,0,1-6,6H48a6,6,0,0,1,0-12H224A6,6,0,0,1,230,48ZM179.76,91.76,78,193.52V112a6,6,0,0,0-12,0v96a6,6,0,0,0,6,6h96a6,6,0,0,0,0-12H86.48L188.24,100.24a6,6,0,0,0-8.48-8.48Z"/></svg>`;
}
