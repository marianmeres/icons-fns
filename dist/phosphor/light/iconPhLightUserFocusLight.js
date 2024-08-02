export const iconPhLightUserFocusLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M222,40V76a6,6,0,0,1-12,0V46H180a6,6,0,0,1,0-12h36A6,6,0,0,1,222,40Zm-6,134a6,6,0,0,0-6,6v30H180a6,6,0,0,0,0,12h36a6,6,0,0,0,6-6V180A6,6,0,0,0,216,174ZM76,210H46V180a6,6,0,0,0-12,0v36a6,6,0,0,0,6,6H76a6,6,0,0,0,0-12ZM40,82a6,6,0,0,0,6-6V46H76a6,6,0,0,0,0-12H40a6,6,0,0,0-6,6V76A6,6,0,0,0,40,82Zm136,92a6,6,0,0,1-4.8-2.4,54,54,0,0,0-86.4,0,6,6,0,1,1-9.6-7.2,65.65,65.65,0,0,1,29.69-22.26,38,38,0,1,1,46.22,0A65.65,65.65,0,0,1,180.8,164.4,6,6,0,0,1,176,174Zm-48-36a26,26,0,1,0-26-26A26,26,0,0,0,128,138Z"/></svg>`;
}
