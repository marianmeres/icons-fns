export const iconPhLightPenNibStraightLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220.54,124.77a1.91,1.91,0,0,0-.15-.28L190,70.42V32a14,14,0,0,0-14-14H80A14,14,0,0,0,66,32V70.44l-30.4,54.05a1.91,1.91,0,0,0-.15.28,14,14,0,0,0,1.27,14.5.76.76,0,0,1,.08.11l86.44,112.28a6,6,0,0,0,9.51,0l86.43-112.28a.76.76,0,0,1,.08-.11A14,14,0,0,0,220.54,124.77ZM80,30h96a2,2,0,0,1,2,2V66H78V32A2,2,0,0,1,80,30Zm48,116a14,14,0,1,1,14-14A14,14,0,0,1,128,146Zm81.63-13.88L134,230.38V157.29a26,26,0,1,0-12,0v73.07L46.37,132.12a2,2,0,0,1-.2-1.93L75.52,78h105l29.34,52.19A2,2,0,0,1,209.63,132.12Z"/></svg>`;
}
