export const iconPhLightUsb = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M251.33,123l-48-32A6,6,0,0,0,194,96v26H70V72a2,2,0,0,1,2-2h34.6a30,30,0,1,0,0-12H72A14,14,0,0,0,58,72v50H8a6,6,0,0,0,0,12H58v50a14,14,0,0,0,14,14h34v10a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V176a14,14,0,0,0-14-14H120a14,14,0,0,0-14,14v10H72a2,2,0,0,1-2-2V134H194v26a6,6,0,0,0,9.33,5l48-32a6,6,0,0,0,0-10ZM136,46a18,18,0,1,1-18,18A18,18,0,0,1,136,46ZM118,176a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v32a2,2,0,0,1-2,2H120a2,2,0,0,1-2-2Zm88-27.21V107.21L237.18,128Z"/></svg>`;
}
