export const iconPhLightHandSoap = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M182,98.48V88a30,30,0,0,0-30-30H134V30h34a10,10,0,0,1,10,10,6,6,0,0,0,12,0,22,22,0,0,0-22-22H104a6,6,0,0,0,0,12h18V58H104A30,30,0,0,0,74,88V98.48A38.05,38.05,0,0,0,42,136v80a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V136A38.05,38.05,0,0,0,182,98.48ZM104,70h48a18,18,0,0,1,18,18V98H86V88A18,18,0,0,1,104,70Zm98,146a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V136a26,26,0,0,1,26-26h96a26,26,0,0,1,26,26Z"/></svg>`;
}
