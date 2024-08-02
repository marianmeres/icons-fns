export const iconPhLightCrosshairLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,122H221.8A94.13,94.13,0,0,0,134,34.2V24a6,6,0,0,0-12,0V34.2A94.13,94.13,0,0,0,34.2,122H24a6,6,0,0,0,0,12H34.2A94.13,94.13,0,0,0,122,221.8V232a6,6,0,0,0,12,0V221.8A94.13,94.13,0,0,0,221.8,134H232a6,6,0,0,0,0-12Zm-98,87.76V200a6,6,0,0,0-12,0v9.76A82.09,82.09,0,0,1,46.24,134H56a6,6,0,0,0,0-12H46.24A82.09,82.09,0,0,1,122,46.24V56a6,6,0,0,0,12,0V46.24A82.09,82.09,0,0,1,209.76,122H200a6,6,0,0,0,0,12h9.76A82.09,82.09,0,0,1,134,209.76ZM128,90a38,38,0,1,0,38,38A38,38,0,0,0,128,90Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,154Z"/></svg>`;
}
