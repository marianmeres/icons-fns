export const iconPhLightAlignCenterVerticalSimpleLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,122H174V48a14,14,0,0,0-14-14H96A14,14,0,0,0,82,48v74H48a6,6,0,0,0,0,12H82v74a14,14,0,0,0,14,14h64a14,14,0,0,0,14-14V134h34a6,6,0,0,0,0-12Zm-46,86a2,2,0,0,1-2,2H96a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h64a2,2,0,0,1,2,2Z"/></svg>`;
}
