export const iconPhBoldRoadHorizonBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M237.88,202.46a12,12,0,0,1-16.34-4.58L153,76H140v4a12,12,0,0,1-24,0V76H103L34.46,197.88a12,12,0,1,1-20.92-11.76L75.48,76H24a12,12,0,0,1,0-24H232a12,12,0,0,1,0,24H180.52l61.94,110.12A12,12,0,0,1,237.88,202.46ZM128,108a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V120A12,12,0,0,0,128,108Zm0,56a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V176A12,12,0,0,0,128,164Z"/></svg>`;
}
