export const iconPhThinGauge = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204.23,75.5A107.37,107.37,0,0,0,127.62,44C68.28,44.21,20,93.16,20,153.13V176a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V152A107.25,107.25,0,0,0,204.23,75.5ZM228,176a4,4,0,0,1-4,4H111.85l59.38-81.65a4,4,0,1,0-6.46-4.7L102,180H32a4,4,0,0,1-4-4V153.13A103.42,103.42,0,0,1,28.84,140H56a4,4,0,0,0,0-8H30.21C39.59,87.66,77.84,53.93,124,52.09V80a4,4,0,0,0,8,0V52.08A100.08,100.08,0,0,1,226,132H200a4,4,0,0,0,0,8h27.29a101.6,101.6,0,0,1,.71,12Z"/></svg>`;
}
