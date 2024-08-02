export const iconPhThinCastleTurret = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,220H196V113.66l12.49-12.49A11.93,11.93,0,0,0,212,92.69V48a12,12,0,0,0-12-12H176a4,4,0,0,0-4,4V68H148V40a4,4,0,0,0-4-4H112a4,4,0,0,0-4,4V68H84V40a4,4,0,0,0-4-4H56A12,12,0,0,0,44,48V92.69a11.93,11.93,0,0,0,3.51,8.48L60,113.66V220H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM66.83,109.17,53.17,95.51A4,4,0,0,1,52,92.69V48a4,4,0,0,1,4-4H76V72a4,4,0,0,0,4,4h32a4,4,0,0,0,4-4V44h24V72a4,4,0,0,0,4,4h32a4,4,0,0,0,4-4V44h20a4,4,0,0,1,4,4V92.69a4,4,0,0,1-1.17,2.82l-13.66,13.66A4,4,0,0,0,188,112V220H156V168a28,28,0,0,0-56,0v52H68V112A4,4,0,0,0,66.83,109.17ZM148,220H108V168a20,20,0,0,1,40,0Z"/></svg>`;
}
