export const iconPhThinSuitcaseRollingThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M100,88v96a4,4,0,0,1-8,0V88a4,4,0,0,1,8,0Zm28-4a4,4,0,0,0-4,4v96a4,4,0,0,0,8,0V88A4,4,0,0,0,128,84Zm32,0a4,4,0,0,0-4,4v96a4,4,0,0,0,8,0V88A4,4,0,0,0,160,84Zm44-20V208a12,12,0,0,1-12,12H172v20a4,4,0,0,1-8,0V220H92v20a4,4,0,0,1-8,0V220H64a12,12,0,0,1-12-12V64A12,12,0,0,1,64,52H92V24A20,20,0,0,1,112,4h32a20,20,0,0,1,20,20V52h28A12,12,0,0,1,204,64ZM100,52h56V24a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12Zm96,12a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4V208a4,4,0,0,0,4,4H192a4,4,0,0,0,4-4Z"/></svg>`;
}
