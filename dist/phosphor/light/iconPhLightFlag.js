export const iconPhLightFlag = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M44.08,51.37A6,6,0,0,0,42,55.9V224a6,6,0,0,0,12,0V178.78c28.08-22.79,51.88-11,79.34,2.57,16.12,8,33.49,16.58,52,16.58,13.57,0,27.76-4.6,42.56-17.42A6,6,0,0,0,230,176V55.9a6,6,0,0,0-9.93-4.54c-29,25.12-53.28,13.09-81.41-.84C110.77,36.71,79,21.16,44.08,51.37ZM218,173.17c-28.08,22.8-51.88,11-79.34-2.58C113.4,158.08,85.09,144.07,54,164V58.72c28.08-22.8,51.88-11,79.34,2.56C158.6,73.79,186.91,87.8,218,67.91Z"/></svg>`;
}
