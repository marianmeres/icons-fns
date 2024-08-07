export const iconPhLightAlignCenterHorizontalSimple = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,82H134V48a6,6,0,0,0-12,0V82H48A14,14,0,0,0,34,96v64a14,14,0,0,0,14,14h74v34a6,6,0,0,0,12,0V174h74a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82Zm2,78a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z"/></svg>`;
}
