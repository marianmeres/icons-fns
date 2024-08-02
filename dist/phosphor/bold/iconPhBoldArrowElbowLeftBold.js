export const iconPhBoldArrowElbowLeftBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240.49,104.49l-96,96a12,12,0,0,1-17,0L36,109v43a12,12,0,0,1-24,0V80A12,12,0,0,1,24,68H96a12,12,0,0,1,0,24H53l83,83,87.51-87.52a12,12,0,0,1,17,17Z"/></svg>`;
}
