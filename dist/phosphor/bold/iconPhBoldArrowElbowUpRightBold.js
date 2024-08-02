export const iconPhBoldArrowElbowUpRightBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224.49,88.49l-48,48a12,12,0,0,1-17-17L187,92H84V224a12,12,0,0,1-24,0V80A12,12,0,0,1,72,68H187L159.51,40.49a12,12,0,1,1,17-17l48,48A12,12,0,0,1,224.49,88.49Z"/></svg>`;
}
