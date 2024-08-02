export const iconPhLightShieldChevron = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,42H48A14,14,0,0,0,34,56v56c0,51.94,25.12,83.4,46.2,100.64,22.73,18.6,45.27,24.89,46.22,25.15a6,6,0,0,0,3.16,0c.95-.26,23.49-6.55,46.22-25.15C196.88,195.4,222,163.94,222,112V56A14,14,0,0,0,208,42ZM168.56,203.06A131.17,131.17,0,0,1,128,225.72a130.94,130.94,0,0,1-40.56-22.66,113.09,113.09,0,0,1-25.56-29.45L128,127.32l66.12,46.29A113.09,113.09,0,0,1,168.56,203.06ZM210,112c0,18.75-3.44,35.75-10.28,50.88l-68.28-47.8a6,6,0,0,0-6.88,0l-68.28,47.8C49.44,147.75,46,130.75,46,112V56a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z"/></svg>`;
}
