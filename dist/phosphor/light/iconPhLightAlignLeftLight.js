export const iconPhLightAlignLeftLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M46,40V216a6,6,0,0,1-12,0V40a6,6,0,0,1,12,0Zm20,64V64A14,14,0,0,1,80,50h96a14,14,0,0,1,14,14v40a14,14,0,0,1-14,14H80A14,14,0,0,1,66,104Zm12,0a2,2,0,0,0,2,2h96a2,2,0,0,0,2-2V64a2,2,0,0,0-2-2H80a2,2,0,0,0-2,2Zm152,48v40a14,14,0,0,1-14,14H80a14,14,0,0,1-14-14V152a14,14,0,0,1,14-14H216A14,14,0,0,1,230,152Zm-12,0a2,2,0,0,0-2-2H80a2,2,0,0,0-2,2v40a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"/></svg>`;
}
