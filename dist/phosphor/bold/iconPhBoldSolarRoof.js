export const iconPhBoldSolarRoof = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M250.73,122.63l-40-80A12,12,0,0,0,200,36H56a12,12,0,0,0-10.73,6.63l-40,80A12,12,0,0,0,4,128v56a20,20,0,0,0,20,20H232a20,20,0,0,0,20-20V128A12,12,0,0,0,250.73,122.63ZM96.58,60l8,16H83.42l-8-16Zm48,0,8,16H131.42l-8-16Zm-41.16,56-8-16h21.16l8,16Zm48,0-8-16h21.16l8,16Zm48,0-8-16h21.16l8,16Zm1.16-40H179.42l-8-16h21.16ZM28,130.83l28-56,28,56V180H28ZM108,180V140H228v40Z"/></svg>`;
}
