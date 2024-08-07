export const iconPhThinShapes = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M67.79,62.74a4,4,0,0,0-7.58,0l-40,120A4,4,0,0,0,24,188h80a4,4,0,0,0,3.79-5.26ZM29.55,180,64,76.65,98.45,180ZM204,76a48,48,0,1,0-48,48A48.05,48.05,0,0,0,204,76Zm-88,0a40,40,0,1,1,40,40A40,40,0,0,1,116,76Zm108,72H136a4,4,0,0,0-4,4v56a4,4,0,0,0,4,4h88a4,4,0,0,0,4-4V152A4,4,0,0,0,224,148Zm-4,56H140V156h80Z"/></svg>`;
}
