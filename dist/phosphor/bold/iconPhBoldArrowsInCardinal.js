export const iconPhBoldArrowsInCardinal = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M87.51,72.49a12,12,0,0,1,17-17L116,67V24a12,12,0,0,1,24,0V67l11.51-11.52a12,12,0,0,1,17,17l-32,32a12,12,0,0,1-17,0Zm49,79a12,12,0,0,0-17,0l-32,32a12,12,0,0,0,17,17L116,189v43a12,12,0,0,0,24,0V189l11.51,11.52a12,12,0,0,0,17-17ZM232,116H189l11.52-11.51a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17l32,32a12,12,0,0,0,17-17L189,140h43a12,12,0,0,0,0-24Zm-127.51,3.51-32-32a12,12,0,0,0-17,17L67,116H24a12,12,0,0,0,0,24H67L55.51,151.51a12,12,0,0,0,17,17l32-32A12,12,0,0,0,104.49,119.51Z"/></svg>`;
}
