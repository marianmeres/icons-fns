export const iconPhBoldBathtubBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,92H211.3A12,12,0,0,0,200,84H136a12,12,0,0,0-11.3,8H68V52a8,8,0,0,1,8-8,8.5,8.5,0,0,1,8.24,6.39,12,12,0,0,0,23.52-4.78A32.22,32.22,0,0,0,44,52V92H16A12,12,0,0,0,4,104v40a60.07,60.07,0,0,0,56,59.85V216a12,12,0,0,0,24,0V204h88v12a12,12,0,0,0,24,0V203.85A60.07,60.07,0,0,0,252,144V104A12,12,0,0,0,240,92Zm-92,16h40v24H148Zm80,36a36,36,0,0,1-36,36H64a36,36,0,0,1-36-36V116h96v28a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V116h16Z"/></svg>`;
}
