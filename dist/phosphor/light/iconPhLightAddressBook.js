export const iconPhLightAddressBook = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M159.11,142.13a38,38,0,1,0-46.22,0A65.75,65.75,0,0,0,83.2,164.4a6,6,0,0,0,9.6,7.2,54,54,0,0,1,86.4,0,6,6,0,0,0,9.6-7.2A65.75,65.75,0,0,0,159.11,142.13ZM110,112a26,26,0,1,1,26,26A26,26,0,0,1,110,112Zm98-86H64A14,14,0,0,0,50,40V66H32a6,6,0,0,0,0,12H50v44H32a6,6,0,0,0,0,12H50v44H32a6,6,0,0,0,0,12H50v26a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V40A14,14,0,0,0,208,26Zm2,190a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z"/></svg>`;
}
