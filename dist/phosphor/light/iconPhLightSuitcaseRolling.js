export const iconPhLightSuitcaseRolling = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M102,88v96a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0Zm26-6a6,6,0,0,0-6,6v96a6,6,0,0,0,12,0V88A6,6,0,0,0,128,82Zm32,0a6,6,0,0,0-6,6v96a6,6,0,0,0,12,0V88A6,6,0,0,0,160,82Zm46-18V208a14,14,0,0,1-14,14H174v18a6,6,0,0,1-12,0V222H94v18a6,6,0,0,1-12,0V222H64a14,14,0,0,1-14-14V64A14,14,0,0,1,64,50H90V24A22,22,0,0,1,112,2h32a22,22,0,0,1,22,22V50h26A14,14,0,0,1,206,64ZM102,50h52V24a10,10,0,0,0-10-10H112a10,10,0,0,0-10,10Zm92,14a2,2,0,0,0-2-2H64a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2H192a2,2,0,0,0,2-2Z"/></svg>`;
}
