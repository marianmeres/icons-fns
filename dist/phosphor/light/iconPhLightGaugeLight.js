export const iconPhLightGaugeLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M205.65,74.08A109.26,109.26,0,0,0,128,42h-.39C67.17,42.21,18,92.06,18,153.13V176a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V152A109.3,109.3,0,0,0,205.65,74.08ZM226,176a2,2,0,0,1-2,2H115.78l57.07-78.47a6,6,0,0,0-9.7-7.06L100.94,178H32a2,2,0,0,1-2-2V153.13A102.36,102.36,0,0,1,30.62,142H56a6,6,0,0,0,0-12H32.71C42.6,88.4,78.53,56.86,122,54.19V80a6,6,0,0,0,12,0V54.19A98.05,98.05,0,0,1,223.53,130H200a6,6,0,0,0,0,12h25.5c.33,3.3.5,6.64.5,10Z"/></svg>`;
}
