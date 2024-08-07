export const iconPhThinCurrencyEur = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M187,195a4,4,0,0,1-.31,5.65A76,76,0,0,1,60.11,148H40a4,4,0,0,1,0-8H60V116H40a4,4,0,0,1,0-8H60.11A76,76,0,0,1,186.67,55.35a4,4,0,1,1-5.34,6A68,68,0,0,0,68.13,108H136a4,4,0,0,1,0,8H68v24h52a4,4,0,0,1,0,8H68.13a68,68,0,0,0,113.2,46.69A4,4,0,0,1,187,195Z"/></svg>`;
}
