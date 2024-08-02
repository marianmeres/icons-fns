export const iconPhLightShieldSlashLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M52.44,36a6,6,0,0,0-9.63,7A14,14,0,0,0,34,56v56c0,51.94,25.12,83.4,46.2,100.64,22.73,18.6,45.27,24.89,46.22,25.15a6,6,0,0,0,3.16,0c1.36-.37,31.91-8.95,57.67-35.7L203.56,220a6,6,0,0,0,8.88-8.08ZM128,225.72a130.83,130.83,0,0,1-40.56-22.66C59.94,180.39,46,149.75,46,112V56a2,2,0,0,1,2-2h4.6L179.16,193.19A130.68,130.68,0,0,1,128,225.72ZM222,56v56c0,20.29-3.83,39.05-11.38,55.77a6,6,0,0,1-5.47,3.53,5.86,5.86,0,0,1-2.47-.54,6,6,0,0,1-3-7.93C206.53,147.67,210,130.57,210,112V56a2,2,0,0,0-2-2H98.52a6,6,0,1,1,0-12H208A14,14,0,0,1,222,56Z"/></svg>`;
}
