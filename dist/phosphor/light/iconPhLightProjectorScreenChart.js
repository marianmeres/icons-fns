export const iconPhLightProjectorScreenChart = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M90,144V128a6,6,0,0,1,12,0v16a6,6,0,0,1-12,0Zm38,6a6,6,0,0,0,6-6V120a6,6,0,0,0-12,0v24A6,6,0,0,0,128,150Zm32,0a6,6,0,0,0,6-6V112a6,6,0,0,0-12,0v32A6,6,0,0,0,160,150Zm54-72V178h10a6,6,0,0,1,0,12H134v20.84a22,22,0,1,1-12,0V190H32a6,6,0,0,1,0-12H42V78H40A14,14,0,0,1,26,64V48A14,14,0,0,1,40,34H216a14,14,0,0,1,14,14V64a14,14,0,0,1-14,14ZM128,222a10,10,0,1,0,10,10A10,10,0,0,0,128,222ZM40,66H216a2,2,0,0,0,2-2V48a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V64A2,2,0,0,0,40,66ZM202,78H54V178H202Z"/></svg>`;
}
