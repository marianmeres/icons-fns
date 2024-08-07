export const iconPhLightWashingMachine = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM128,66a62,62,0,1,0,62,62A62.07,62.07,0,0,0,128,66Zm0,112a50,50,0,1,1,50-50A50.06,50.06,0,0,1,128,178ZM198,68a10,10,0,1,1-10-10A10,10,0,0,1,198,68Zm-73.76,48.24-16,16a6,6,0,0,1-8.48-8.48l16-16a6,6,0,0,1,8.48,8.48Zm32-.48a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48-8.48l32-32A6,6,0,0,1,156.24,115.76Z"/></svg>`;
}
