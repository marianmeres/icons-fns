export const iconPhLightNumberCircleSevenLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM156.91,84.56a6,6,0,0,1,.73,5.49l-32,88A6,6,0,0,1,120,182a6.15,6.15,0,0,1-2-.36,6,6,0,0,1-3.59-7.69L143.43,94H104a6,6,0,0,1,0-12h48A6,6,0,0,1,156.91,84.56Z"/></svg>`;
}
