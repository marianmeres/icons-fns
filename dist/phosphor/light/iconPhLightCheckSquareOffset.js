export const iconPhLightCheckSquareOffset = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M222,48V208a14,14,0,0,1-14,14H136a6,6,0,0,1,0-12h72a2,2,0,0,0,2-2V48a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2v96a6,6,0,0,1-12,0V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48ZM115.76,155.76,64,207.51,44.24,187.76a6,6,0,0,0-8.48,8.48l24,24a6,6,0,0,0,8.48,0l56-56a6,6,0,0,0-8.48-8.48Z"/></svg>`;
}
