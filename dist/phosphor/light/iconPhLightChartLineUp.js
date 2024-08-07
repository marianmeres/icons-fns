export const iconPhLightChartLineUp = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230,208a6,6,0,0,1-6,6H32a6,6,0,0,1-6-6V48a6,6,0,0,1,12,0V161.52l53.76-53.76a6,6,0,0,1,8.48,0L128,135.51,185.52,78H160a6,6,0,0,1,0-12h40a6,6,0,0,1,6,6v40a6,6,0,0,1-12,0V86.48l-61.76,61.76a6,6,0,0,1-8.48,0L96,120.49l-58,58V202H224A6,6,0,0,1,230,208Z"/></svg>`;
}
