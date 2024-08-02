export const iconPhThinRuler = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232.49,76.2,179.8,23.51a12,12,0,0,0-17,0L23.51,162.83a12,12,0,0,0,0,17L76.2,232.49a12,12,0,0,0,17,0L232.49,93.17A12,12,0,0,0,232.49,76.2Zm-5.66,11.31L87.51,226.83a4,4,0,0,1-5.65,0L29.17,174.14a4,4,0,0,1,0-5.65L64,133.66l29.17,29.17a4,4,0,1,0,5.66-5.66L69.65,128,96,101.66l29.17,29.17a4,4,0,0,0,5.66-5.66L101.65,96,128,69.66l29.17,29.17a4,4,0,1,0,5.66-5.66L133.66,64l34.83-34.83a4,4,0,0,1,5.65,0l52.69,52.69A4,4,0,0,1,226.83,87.51Z"/></svg>`;
}
