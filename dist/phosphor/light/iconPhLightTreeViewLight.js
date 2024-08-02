export const iconPhLightTreeViewLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,150h32a14,14,0,0,0,14-14V104a14,14,0,0,0-14-14H176a14,14,0,0,0-14,14v10H86V78H96a14,14,0,0,0,14-14V32A14,14,0,0,0,96,18H64A14,14,0,0,0,50,32V64A14,14,0,0,0,64,78H74V192a22,22,0,0,0,22,22h66v10a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V192a14,14,0,0,0-14-14H176a14,14,0,0,0-14,14v10H96a10,10,0,0,1-10-10V126h76v10A14,14,0,0,0,176,150ZM62,64V32a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H64A2,2,0,0,1,62,64ZM174,192a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v32a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2Zm0-88a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v32a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2Z"/></svg>`;
}
