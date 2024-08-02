export const iconPhLightMicrosoftTeamsLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M82,110H72a6,6,0,0,1,0-12h32a6,6,0,0,1,0,12H94v42a6,6,0,0,1-12,0ZM230,92.74V152A38.05,38.05,0,0,1,194,190,62,62,0,0,1,78,190H40a14,14,0,0,1-14-14V80A14,14,0,0,1,40,66H99.34a38,38,0,0,1,70-28.19A30,30,0,0,1,208,82h11.28A10.75,10.75,0,0,1,230,92.74ZM173.42,49.45A37.28,37.28,0,0,1,174,56a38,38,0,0,1-10.28,26H184a18,18,0,1,0-10.58-32.55ZM112,66h24a14,14,0,0,1,13.84,12A26,26,0,1,0,112,66ZM40,178h96a2,2,0,0,0,2-2V80a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2v96A2,2,0,0,0,40,178Zm146-10V96a2,2,0,0,0-2-2H150v82a14,14,0,0,1-14,14H91.1A50,50,0,0,0,186,168Zm32-74H197.84a14.71,14.71,0,0,1,.16,2v72a62.69,62.69,0,0,1-.72,9.46A26,26,0,0,0,218,152Z"/></svg>`;
}
