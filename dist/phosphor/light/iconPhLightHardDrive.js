export const iconPhLightHardDrive = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,66H32A14,14,0,0,0,18,80v96a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V80A14,14,0,0,0,224,66Zm2,110a2,2,0,0,1-2,2H32a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2Zm-28-48a10,10,0,1,1-10-10A10,10,0,0,1,198,128Z"/></svg>`;
}
