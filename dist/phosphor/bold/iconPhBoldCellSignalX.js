export const iconPhBoldCellSignalX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216.49,191.51a12,12,0,0,1-17,17L184,193l-15.51,15.52a12,12,0,0,1-17-17L167,176l-15.52-15.51a12,12,0,0,1,17-17L184,159l15.51-15.52a12,12,0,0,1,17,17L201,176ZM160,120a12,12,0,0,0,12-12V72a12,12,0,0,0-24,0v36A12,12,0,0,0,160,120Zm40,0a12,12,0,0,0,12-12V32a12,12,0,0,0-24,0v76A12,12,0,0,0,200,120Zm-80-20a12,12,0,0,0-12,12v88a12,12,0,0,0,24,0V112A12,12,0,0,0,120,100ZM80,140a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V152A12,12,0,0,0,80,140ZM40,180a12,12,0,0,0-12,12v8a12,12,0,0,0,24,0v-8A12,12,0,0,0,40,180Z"/></svg>`;
}
