export const iconPhBoldChartPolarBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm83.13,96H194.92A68.16,68.16,0,0,0,140,61.08V44.87A84.18,84.18,0,0,1,211.13,116ZM116,116H85.68A44.13,44.13,0,0,1,116,85.68Zm0,24v30.32A44.13,44.13,0,0,1,85.68,140Zm24,0h30.32A44.13,44.13,0,0,1,140,170.32Zm0-24V85.68A44.13,44.13,0,0,1,170.32,116ZM116,44.87V61.08A68.16,68.16,0,0,0,61.08,116H44.87A84.18,84.18,0,0,1,116,44.87ZM44.87,140H61.08A68.16,68.16,0,0,0,116,194.92v16.21A84.18,84.18,0,0,1,44.87,140ZM140,211.13V194.92A68.16,68.16,0,0,0,194.92,140h16.21A84.18,84.18,0,0,1,140,211.13Z"/></svg>`;
}
