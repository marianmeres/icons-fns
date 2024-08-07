export const iconPhLightSignpost = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244.46,108,210.84,70.63A14,14,0,0,0,200.44,66H134V32a6,6,0,0,0-12,0V66H40A14,14,0,0,0,26,80v64a14,14,0,0,0,14,14h82v66a6,6,0,0,0,12,0V158h66.44a14,14,0,0,0,10.4-4.63L244.46,116A6,6,0,0,0,244.46,108Zm-42.54,37.35a2,2,0,0,1-1.48.66H40a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2H200.44a2,2,0,0,1,1.48.66l30,33.34Z"/></svg>`;
}
