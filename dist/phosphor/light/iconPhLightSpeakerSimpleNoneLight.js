export const iconPhLightSpeakerSimpleNoneLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M162.64,26.61a6,6,0,0,0-6.32.65L85.94,82H40A14,14,0,0,0,26,96v64a14,14,0,0,0,14,14H85.94l70.38,54.74A6,6,0,0,0,166,224V32A6,6,0,0,0,162.64,26.61ZM154,211.73,91.68,163.26A6,6,0,0,0,88,162H40a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H88a6,6,0,0,0,3.68-1.26L154,44.27Z"/></svg>`;
}
