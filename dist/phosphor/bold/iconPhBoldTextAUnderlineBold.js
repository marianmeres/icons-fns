export const iconPhBoldTextAUnderlineBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M58.89,178.86a12,12,0,0,0,16-5.75L90.44,140h75.12l15.58,33.11a12,12,0,0,0,21.72-10.22l-64-136a12,12,0,0,0-21.72,0l-64,136A12,12,0,0,0,58.89,178.86ZM128,60.18,154.27,116H101.73ZM228,216a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,216Z"/></svg>`;
}
