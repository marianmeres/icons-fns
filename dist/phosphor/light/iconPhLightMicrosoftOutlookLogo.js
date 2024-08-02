export const iconPhLightMicrosoftOutlookLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M118,128a30,30,0,1,0-30,30A30,30,0,0,0,118,128Zm-48,0a18,18,0,1,1,18,18A18,18,0,0,1,70,128Zm154-22H206V40a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6V66H40A14,14,0,0,0,26,80v96a14,14,0,0,0,14,14H74v18a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V112A6,6,0,0,0,224,106Zm-61.75,58L218,123.73v80.54ZM110,46h84v80.27L152,156.6l-2-1.45V80a14,14,0,0,0-14-14H110ZM38,176V80a2,2,0,0,1,2-2h96a2,2,0,0,1,2,2v96a2,2,0,0,1-2,2H40A2,2,0,0,1,38,176Zm48,32V190h50a14,14,0,0,0,14-14v-6l55.44,40H88A2,2,0,0,1,86,208Z"/></svg>`;
}
