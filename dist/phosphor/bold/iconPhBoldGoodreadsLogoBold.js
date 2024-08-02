export const iconPhBoldGoodreadsLogoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,20a12,12,0,0,0-12,12v4.22A67.94,67.94,0,0,0,60,88v24a67.94,67.94,0,0,0,112,51.78V168a44.05,44.05,0,0,1-44,44c-15,0-30.29-7.58-38.16-18.87a12,12,0,0,0-19.68,13.74C82.5,224.56,105.21,236,128,236a68.07,68.07,0,0,0,68-68V32A12,12,0,0,0,184,20ZM128,156a44.05,44.05,0,0,1-44-44V88a44,44,0,0,1,88,0v24A44.05,44.05,0,0,1,128,156Z"/></svg>`;
}
