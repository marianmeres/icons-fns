export const iconPhThinSignpostThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M243,109.32,209.36,72a12.06,12.06,0,0,0-8.92-4H132V32a4,4,0,0,0-8,0V68H40A12,12,0,0,0,28,80v64a12,12,0,0,0,12,12h84v68a4,4,0,0,0,8,0V156h68.44a12.06,12.06,0,0,0,8.92-4L243,114.68A4,4,0,0,0,243,109.32Zm-39.56,37.36a4,4,0,0,1-3,1.32H40a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H200.44a4,4,0,0,1,3,1.32L234.62,112Z"/></svg>`;
}
