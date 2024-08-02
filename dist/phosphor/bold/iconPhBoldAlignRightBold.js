export const iconPhBoldAlignRightBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,40V216a12,12,0,0,1-24,0V40a12,12,0,0,1,24,0ZM188,64v36a20,20,0,0,1-20,20H80a20,20,0,0,1-20-20V64A20,20,0,0,1,80,44h88A20,20,0,0,1,188,64Zm-24,4H84V96h80Zm24,88v36a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V156a20,20,0,0,1,20-20H168A20,20,0,0,1,188,156Zm-24,4H44v28H164Z"/></svg>`;
}
