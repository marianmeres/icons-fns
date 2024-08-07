export const iconPhLightTarget = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220.06,84a102.06,102.06,0,1,1-24.31-32.27l24-24a6,6,0,0,1,8.48,8.49l-96,96a6,6,0,1,1-8.48-8.49l29.39-29.4a42,42,0,1,0,16.78,31.24,6,6,0,1,1,12-.68A54,54,0,1,1,161.7,85.83l25.54-25.55a89.91,89.91,0,1,0,22,28.93A6,6,0,1,1,220.06,84Z"/></svg>`;
}
