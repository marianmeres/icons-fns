export const iconPhBoldSuitcaseRollingBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M116,96v80a12,12,0,0,1-24,0V96a12,12,0,0,1,24,0Zm24,0v80a12,12,0,0,0,24,0V96a12,12,0,0,0-24,0Zm72-32V208a20,20,0,0,1-20,20H180v12a12,12,0,0,1-24,0V228H100v12a12,12,0,0,1-24,0V228H64a20,20,0,0,1-20-20V64A20,20,0,0,1,64,44H84V28A28,28,0,0,1,112,0h32a28,28,0,0,1,28,28V44h20A20,20,0,0,1,212,64ZM108,44h40V28a4,4,0,0,0-4-4H112a4,4,0,0,0-4,4Zm80,24H68V204H188Z"/></svg>`;
}
