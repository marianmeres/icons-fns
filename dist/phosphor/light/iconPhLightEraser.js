export const iconPhLightEraser = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M223.57,81.81,182.19,40.43a22,22,0,0,0-31.12,0L32.43,159.07a22,22,0,0,0,0,31.11L62.5,220.24A6,6,0,0,0,66.74,222H216a6,6,0,0,0,0-12H126.49l97.08-97.08A22,22,0,0,0,223.57,81.81ZM109.51,210H69.22l-28.3-28.3a10,10,0,0,1,0-14.15L96,112.48,151.52,168ZM215.08,104.44,160,159.51,104.48,104l55.08-55.07a10,10,0,0,1,14.14,0l41.38,41.37A10,10,0,0,1,215.08,104.44Z"/></svg>`;
}
