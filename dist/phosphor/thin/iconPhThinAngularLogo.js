export const iconPhThinAngularLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M225.54,68.31l-96-40a4,4,0,0,0-3.08,0l-96,40A4,4,0,0,0,28,72.53l16,120a4,4,0,0,0,2.17,3.05l80,40a4,4,0,0,0,3.58,0l80-40a4,4,0,0,0,2.17-3.05l16-120A4,4,0,0,0,225.54,68.31ZM204.32,189.37,128,227.53,51.68,189.37,36.37,74.51,128,36.33l91.63,38.18ZM124.5,86.06l-40,72a4,4,0,1,0,7,3.88L103.69,140h48.62l12.19,21.94a4,4,0,1,0,7-3.88l-40-72a4,4,0,0,0-7,0ZM147.87,132H108.13L128,96.24Z"/></svg>`;
}
