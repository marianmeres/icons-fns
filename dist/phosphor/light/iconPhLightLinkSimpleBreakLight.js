export const iconPhLightLinkSimpleBreakLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M214.2,118.18l-30.07,30.07a6,6,0,0,1-8.49-8.49l30.08-30.07a42,42,0,0,0-59.41-59.41L116.24,80.34a6,6,0,0,1-8.49-8.49l30.07-30a54,54,0,0,1,76.38,76.38Zm-74.44,57.46-30.07,30.08a42,42,0,0,1-59.41-59.41l30.06-30.07a6,6,0,0,0-8.49-8.49l-30,30.07a54,54,0,0,0,76.38,76.39l30.07-30.08a6,6,0,0,0-8.49-8.49Z"/></svg>`;
}
