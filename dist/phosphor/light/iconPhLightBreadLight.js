export const iconPhLightBreadLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M238,80a38,38,0,0,0-38-38H48a38,38,0,0,0-14,73.32V200a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V115.32A38.07,38.07,0,0,0,238,80ZM46,200V118c.66,0,1.33,0,2,0a6,6,0,0,0,0-12,26,26,0,0,1,0-52h96a26,26,0,0,1,0,52,6,6,0,0,0,0,12c.67,0,1.34,0,2,0V200a2,2,0,0,1-2,2H48A2,2,0,0,1,46,200Zm154-94a6,6,0,0,0,0,12c.67,0,1.34,0,2,0V200a2,2,0,0,1-2,2H157.84a14.71,14.71,0,0,0,.16-2V115.32A38,38,0,0,0,171.68,54H200a26,26,0,0,1,0,52Z"/></svg>`;
}
