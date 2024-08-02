export const iconPhLightGenderNonbinary = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M134,98.27V58.6l30.91,18.54a6,6,0,1,0,6.18-10.28L139.66,48l31.43-18.85a6,6,0,1,0-6.18-10.29L128,41,91.09,18.86a6,6,0,1,0-6.18,10.29L116.34,48,84.91,66.86a6,6,0,1,0,6.18,10.28L122,58.6V98.27a70,70,0,1,0,12,0ZM128,226a58,58,0,1,1,58-58A58.07,58.07,0,0,1,128,226Z"/></svg>`;
}
