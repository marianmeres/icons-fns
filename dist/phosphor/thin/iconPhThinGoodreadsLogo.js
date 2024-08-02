export const iconPhThinGoodreadsLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,28a4,4,0,0,0-4,4V58.13A60,60,0,0,0,68,88v24a60,60,0,0,0,112,29.87V168a52.06,52.06,0,0,1-52,52c-17.72,0-35.28-8.75-44.72-22.29a4,4,0,0,0-6.56,4.58C87.61,217.91,107.74,228,128,228a60.07,60.07,0,0,0,60-60V32A4,4,0,0,0,184,28ZM128,164a52.06,52.06,0,0,1-52-52V88a52,52,0,0,1,104,0v24A52.06,52.06,0,0,1,128,164Z"/></svg>`;
}
