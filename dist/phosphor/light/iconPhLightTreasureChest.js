export const iconPhLightTreasureChest = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,42H72A54.06,54.06,0,0,0,18,96v96a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V96A54.06,54.06,0,0,0,184,42Zm42,54v10H190V54.44A42.05,42.05,0,0,1,226,96Zm-88,42H118V102h20Zm-26,12h32a6,6,0,0,0,6-6V118h28v76H78V118h28v26A6,6,0,0,0,112,150Zm38-44V96a6,6,0,0,0-6-6H112a6,6,0,0,0-6,6v10H78V54H178v52ZM66,54.44V106H30V96A42.05,42.05,0,0,1,66,54.44ZM30,192V118H66v76H32A2,2,0,0,1,30,192Zm194,2H190V118h36v74A2,2,0,0,1,224,194Z"/></svg>`;
}
