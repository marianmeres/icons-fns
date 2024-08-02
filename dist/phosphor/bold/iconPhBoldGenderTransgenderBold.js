export const iconPhBoldGenderTransgenderBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,28H172a12,12,0,0,0,0,24h15L168,71,152.49,55.52a12,12,0,0,0-17,17L151,88,140.58,98.46a76,76,0,1,0,17,17L168,105l15.51,15.52a12,12,0,0,0,17-17L185,88l19-19V84a12,12,0,0,0,24,0V40A12,12,0,0,0,216,28ZM132.77,196.8A52,52,0,1,1,148,160,52.05,52.05,0,0,1,132.77,196.8Z"/></svg>`;
}
