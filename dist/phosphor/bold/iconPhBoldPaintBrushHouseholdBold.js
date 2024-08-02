export const iconPhBoldPaintBrushHouseholdBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M233.47,22.53a36,36,0,0,0-50.91,0l-.39.4L129.61,80.61l-5.8-5.79a28,28,0,0,0-39.6,0L7.52,151.51a12,12,0,0,0,0,17l80,80a12,12,0,0,0,17,0l76.7-76.7a28,28,0,0,0,0-39.6l-5.8-5.8,57.68-52.56.4-.39A36,36,0,0,0,233.47,22.53ZM96,223l-9-9,17.51-17.52a12,12,0,0,0-17-17L70,197,59,186l17.52-17.52a12,12,0,0,0-17-17L42,169l-9-9,39-39,63,63ZM216.66,56.31l-66.73,60.81a12,12,0,0,0-.4,17.36l14.68,14.68a4,4,0,0,1,0,5.66L152,167,89,104l12.2-12.2a4,4,0,0,1,5.66,0l14.68,14.68a12,12,0,0,0,17.36-.4l60.81-66.73a12,12,0,0,1,17,17Z"/></svg>`;
}
