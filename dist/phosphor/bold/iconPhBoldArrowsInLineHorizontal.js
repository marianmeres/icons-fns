export const iconPhBoldArrowsInLineHorizontal = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M140,40V216a12,12,0,0,1-24,0V40a12,12,0,0,1,24,0ZM64.49,87.51a12,12,0,0,0-17,17L59,116H16a12,12,0,0,0,0,24H59L47.51,151.51a12,12,0,0,0,17,17l32-32a12,12,0,0,0,0-17ZM240,116H197l11.52-11.51a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17l32,32a12,12,0,0,0,17-17L197,140h43a12,12,0,0,0,0-24Z"/></svg>`;
}
