export const iconPhLightMagnetStraightLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,42H160a14,14,0,0,0-14,14v88a18,18,0,0,1-36,0V56A14,14,0,0,0,96,42H56A14,14,0,0,0,42,56v88a86,86,0,0,0,86,86h.65c47.06-.35,85.35-39.38,85.35-87V56A14,14,0,0,0,200,42ZM160,54h40a2,2,0,0,1,2,2V90H158V56A2,2,0,0,1,160,54ZM56,54H96a2,2,0,0,1,2,2V90H54V56A2,2,0,0,1,56,54Zm72.56,164H128a74,74,0,0,1-74-74V102H98v42a30,30,0,0,0,60,0V102h44v41C202,184.05,169.06,217.7,128.56,218Z"/></svg>`;
}
