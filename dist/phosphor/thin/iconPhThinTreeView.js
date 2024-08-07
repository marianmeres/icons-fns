export const iconPhThinTreeView = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,148h32a12,12,0,0,0,12-12V104a12,12,0,0,0-12-12H176a12,12,0,0,0-12,12v12H84V76H96a12,12,0,0,0,12-12V32A12,12,0,0,0,96,20H64A12,12,0,0,0,52,32V64A12,12,0,0,0,64,76H76V192a20,20,0,0,0,20,20h68v12a12,12,0,0,0,12,12h32a12,12,0,0,0,12-12V192a12,12,0,0,0-12-12H176a12,12,0,0,0-12,12v12H96a12,12,0,0,1-12-12V124h80v12A12,12,0,0,0,176,148ZM60,64V32a4,4,0,0,1,4-4H96a4,4,0,0,1,4,4V64a4,4,0,0,1-4,4H64A4,4,0,0,1,60,64ZM172,192a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4v32a4,4,0,0,1-4,4H176a4,4,0,0,1-4-4Zm0-88a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4v32a4,4,0,0,1-4,4H176a4,4,0,0,1-4-4Z"/></svg>`;
}
