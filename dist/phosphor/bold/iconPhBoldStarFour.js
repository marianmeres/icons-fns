export const iconPhBoldStarFour = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230.86,109.25,169.18,86.82,146.75,25.14a19.95,19.95,0,0,0-37.5,0L86.82,86.82,25.14,109.25a19.95,19.95,0,0,0,0,37.5l61.68,22.43,22.43,61.68a19.95,19.95,0,0,0,37.5,0l22.43-61.68,61.68-22.43a19.95,19.95,0,0,0,0-37.5Zm-75.14,39.29a12,12,0,0,0-7.18,7.18L128,212.21l-20.54-56.49a12,12,0,0,0-7.18-7.18L43.79,128l56.49-20.54a12,12,0,0,0,7.18-7.18L128,43.79l20.54,56.49a12,12,0,0,0,7.18,7.18L212.21,128Z"/></svg>`;
}
