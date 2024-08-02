export const iconPhBoldTextHFour = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M156,56V176a12,12,0,0,1-24,0V128H52v48a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0v48h80V56a12,12,0,0,1,24,0ZM256,184a12,12,0,0,1-12,12v12a12,12,0,0,1-24,0V196H180a12,12,0,0,1-9.73-19l52-72A12,12,0,0,1,244,112v60A12,12,0,0,1,256,184Zm-36-34.89L203.47,172H220Z"/></svg>`;
}
