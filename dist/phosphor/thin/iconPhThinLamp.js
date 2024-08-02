export const iconPhThinLamp = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M243.68,150.42l-48-112A4,4,0,0,0,192,36H64a4,4,0,0,0-3.68,2.42l-48,112A4,4,0,0,0,16,156H124v56H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8H132V156h64v36a4,4,0,0,0,8,0V156h36a4,4,0,0,0,3.68-5.58ZM22.07,148,66.64,44H189.36l44.57,104Z"/></svg>`;
}
