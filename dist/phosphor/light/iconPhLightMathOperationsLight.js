export const iconPhLightMathOperationsLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M110,72a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12h64A6,6,0,0,1,110,72Zm-6,106H78V152a6,6,0,0,0-12,0v26H40a6,6,0,0,0,0,12H66v26a6,6,0,0,0,12,0V190h26a6,6,0,0,0,0-12Zm48-4h64a6,6,0,0,0,0-12H152a6,6,0,0,0,0,12Zm64,20H152a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm-60.24-93.76a6,6,0,0,0,8.48,0L184,80.49l19.76,19.75a6,6,0,0,0,8.48-8.48L192.49,72l19.75-19.76a6,6,0,0,0-8.48-8.48L184,63.51,164.24,43.76a6,6,0,0,0-8.48,8.48L175.51,72,155.76,91.76A6,6,0,0,0,155.76,100.24Z"/></svg>`;
}
