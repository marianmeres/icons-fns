export const iconPhLightCross = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,74H158V32a14,14,0,0,0-14-14H112A14,14,0,0,0,98,32V74H56A14,14,0,0,0,42,88v32a14,14,0,0,0,14,14H98v90a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V134h42a14,14,0,0,0,14-14V88A14,14,0,0,0,200,74Zm2,46a2,2,0,0,1-2,2H152a6,6,0,0,0-6,6v96a2,2,0,0,1-2,2H112a2,2,0,0,1-2-2V128a6,6,0,0,0-6-6H56a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2h48a6,6,0,0,0,6-6V32a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2V80a6,6,0,0,0,6,6h48a2,2,0,0,1,2,2Z"/></svg>`;
}
