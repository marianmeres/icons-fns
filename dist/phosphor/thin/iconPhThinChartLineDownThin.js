export const iconPhThinChartLineDownThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,208a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V48a4,4,0,0,1,8,0V62.34l60,60,29.17-29.17a4,4,0,0,1,5.66,0L196,158.34V128a4,4,0,0,1,8,0v40a4.13,4.13,0,0,1-.08.78,3.37,3.37,0,0,1-.1.34,2.8,2.8,0,0,1-.13.41,2.87,2.87,0,0,1-.2.39c-.05.1-.1.2-.16.3a4.19,4.19,0,0,1-1.11,1.11l-.31.16a3.48,3.48,0,0,1-.38.2,2.8,2.8,0,0,1-.41.13,3.37,3.37,0,0,1-.34.1,4.13,4.13,0,0,1-.78.08H160a4,4,0,0,1,0-8h30.34L128,101.66,98.83,130.83a4,4,0,0,1-5.66,0L36,73.66V204H224A4,4,0,0,1,228,208Z"/></svg>`;
}
