export const iconPhLightTrayArrowUpLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H208a2,2,0,0,1,2,2V154H179.31a13.9,13.9,0,0,0-9.89,4.1L150.1,177.41a2,2,0,0,1-1.41.59H107.31a2,2,0,0,1-1.41-.59L86.59,158.1a13.94,13.94,0,0,0-9.9-4.1H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V166H76.69a2,2,0,0,1,1.41.59L97.41,185.9a13.94,13.94,0,0,0,9.9,4.1h41.38a13.9,13.9,0,0,0,9.89-4.1l19.32-19.31a2,2,0,0,1,1.41-.59H210v42A2,2,0,0,1,208,210ZM91.76,108.24a6,6,0,0,1,0-8.48l32-32a6,6,0,0,1,8.48,0l32,32a6,6,0,1,1-8.48,8.48L134,86.49V152a6,6,0,0,1-12,0V86.49l-21.76,21.75A6,6,0,0,1,91.76,108.24Z"/></svg>`;
}
