export const iconPhThinHighDefinitionThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,76H152a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4h24a52,52,0,0,0,0-104Zm0,96H156V84h20a44,44,0,0,1,0,88Zm-60,4V132H52v44a4,4,0,0,1-8,0V80a4,4,0,0,1,8,0v44h64V80a4,4,0,0,1,8,0v96a4,4,0,0,1-8,0ZM28,48a4,4,0,0,1,4-4H224a4,4,0,0,1,0,8H32A4,4,0,0,1,28,48ZM228,208a4,4,0,0,1-4,4H32a4,4,0,0,1,0-8H224A4,4,0,0,1,228,208Z"/></svg>`;
}
