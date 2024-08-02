export const iconPhBoldArrowFatLinesLeftBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M136,68h-4V32a12,12,0,0,0-20.49-8.49l-96,96a12,12,0,0,0,0,17l96,96A12,12,0,0,0,132,224V188h4a12,12,0,0,0,12-12V80A12,12,0,0,0,136,68Zm-12,96h-4a12,12,0,0,0-12,12v19L41,128l67-67V80a12,12,0,0,0,12,12h4ZM228,80v96a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0Zm-40,0v96a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0Z"/></svg>`;
}
