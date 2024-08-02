export const iconPhBoldTipi = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M242.11,209.53l-99.86-156,19.86-31A12,12,0,1,0,141.89,9.53L128,31.24,114.11,9.53A12,12,0,0,0,93.89,22.47l19.86,31-99.86,156A12,12,0,0,0,24,228H232a12,12,0,0,0,10.11-18.47ZM96.17,204,128,154.26,159.83,204Zm92.16,0-50.22-78.47a12,12,0,0,0-20.22,0L67.67,204H45.93L128,75.76,210.07,204Z"/></svg>`;
}
