export const iconPhBoldMagnetStraightBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,36H160a20,20,0,0,0-20,20v88a12,12,0,0,1-24,0V56A20,20,0,0,0,96,36H56A20,20,0,0,0,36,56v88a92,92,0,0,0,92,92h.71c50.34-.38,91.3-42.1,91.3-93V56A20,20,0,0,0,200,36Zm-4,24V84H164V60ZM92,60V84H60V60Zm36.52,152H128a68,68,0,0,1-68-68V108H92v36a36,36,0,0,0,72,0V108h32v35C196,180.77,165.73,211.72,128.52,212Z"/></svg>`;
}
