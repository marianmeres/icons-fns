export const iconPhLightInfinity = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M246,128a54,54,0,0,1-92.18,38.18,3.07,3.07,0,0,1-.25-.26l-60-67.74a42,42,0,1,0,0,59.64l8.57-9.67a6,6,0,1,1,9,8l-8.69,9.81a3.07,3.07,0,0,1-.25.26,54,54,0,1,1,0-76.36,3.07,3.07,0,0,1,.25.26l60,67.74a42,42,0,1,0,0-59.64l-8.57,9.67a6,6,0,1,1-9-8l8.69-9.81a3.07,3.07,0,0,1,.25-.26A54,54,0,0,1,246,128Z"/></svg>`;
}
