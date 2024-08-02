export const iconPhLightHighDefinition = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,74H152a6,6,0,0,0-6,6v96a6,6,0,0,0,6,6h24a54,54,0,0,0,0-108Zm0,96H158V86h18a42,42,0,0,1,0,84Zm-62,6V134H54v42a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0v42h60V80a6,6,0,0,1,12,0v96a6,6,0,0,1-12,0ZM26,48a6,6,0,0,1,6-6H224a6,6,0,0,1,0,12H32A6,6,0,0,1,26,48ZM230,208a6,6,0,0,1-6,6H32a6,6,0,0,1,0-12H224A6,6,0,0,1,230,208Z"/></svg>`;
}
