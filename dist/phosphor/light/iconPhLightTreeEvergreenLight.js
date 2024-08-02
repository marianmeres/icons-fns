export const iconPhLightTreeEvergreenLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228.74,188.32,180.27,126H208a6,6,0,0,0,4.76-9.66l-80-104a6,6,0,0,0-9.52,0l-80,104A6,6,0,0,0,48,126H75.73L27.26,188.32A6,6,0,0,0,32,198h90v42a6,6,0,0,0,12,0V198h90a6,6,0,0,0,4.74-9.68ZM44.27,186l48.47-62.32A6,6,0,0,0,88,114H60.19L128,25.84,195.81,114H168a6,6,0,0,0-4.74,9.68L211.73,186Z"/></svg>`;
}
