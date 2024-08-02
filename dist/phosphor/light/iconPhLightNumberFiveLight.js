export const iconPhLightNumberFiveLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M174,160a54,54,0,0,1-90,40.25,6,6,0,1,1,8-8.94A42,42,0,1,0,92.8,128,6,6,0,0,1,83,122.25L98.12,46.82A6,6,0,0,1,104,42h64a6,6,0,0,1,0,12H108.92L97.54,110.89A54,54,0,0,1,174,160Z"/></svg>`;
}
