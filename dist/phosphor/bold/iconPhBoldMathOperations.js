export const iconPhBoldMathOperations = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M116,72a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24h64A12,12,0,0,1,116,72ZM104,172H84V152a12,12,0,0,0-24,0v20H40a12,12,0,0,0,0,24H60v20a12,12,0,0,0,24,0V196h20a12,12,0,0,0,0-24Zm48,4h64a12,12,0,0,0,0-24H152a12,12,0,0,0,0,24Zm64,16H152a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Zm-64.49-87.51a12,12,0,0,0,17,0L184,89l15.51,15.52a12,12,0,0,0,17-17L201,72l15.52-15.51a12,12,0,0,0-17-17L184,55,168.49,39.51a12,12,0,0,0-17,17L167,72,151.51,87.51A12,12,0,0,0,151.51,104.49Z"/></svg>`;
}
