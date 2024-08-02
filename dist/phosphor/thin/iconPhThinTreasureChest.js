export const iconPhThinTreasureChest = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,44H72A52.06,52.06,0,0,0,20,96v96a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V96A52.06,52.06,0,0,0,184,44Zm44,52v12H188V52.19A44.06,44.06,0,0,1,228,96Zm-88,44H116V100h24Zm-28,8h32a4,4,0,0,0,4-4V116h32v80H76V116h32v28A4,4,0,0,0,112,148Zm36-40V96a4,4,0,0,0-4-4H112a4,4,0,0,0-4,4v12H76V52H180v56ZM68,52.19V108H28V96A44.06,44.06,0,0,1,68,52.19ZM28,192V116H68v80H32A4,4,0,0,1,28,192Zm196,4H188V116h40v76A4,4,0,0,1,224,196Z"/></svg>`;
}
