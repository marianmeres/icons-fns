export const iconPhLightChartLineDownLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230,208a6,6,0,0,1-6,6H32a6,6,0,0,1-6-6V48a6,6,0,0,1,12,0V61.52l58,58,27.76-27.75a6,6,0,0,1,8.48,0L194,153.52V128a6,6,0,0,1,12,0v40a5.62,5.62,0,0,1-.11,1.1v.06a7.46,7.46,0,0,1-.31,1.05l0,.07a6.13,6.13,0,0,1-.52,1l0,.06a6.25,6.25,0,0,1-1.68,1.68l-.06,0a6.13,6.13,0,0,1-1,.52l-.07,0a7.46,7.46,0,0,1-1.05.31h-.06a5.62,5.62,0,0,1-1.1.11H160a6,6,0,0,1,0-12h25.52L128,104.49l-27.76,27.75a6,6,0,0,1-8.48,0L38,78.48V202H224A6,6,0,0,1,230,208Z"/></svg>`;
}
