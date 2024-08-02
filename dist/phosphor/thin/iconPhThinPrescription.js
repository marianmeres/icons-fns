export const iconPhThinPrescription = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M177.66,188l25.17-25.17a4,4,0,0,0-5.66-5.66L172,182.34,121.66,132H124a48,48,0,0,0,0-96H72a4,4,0,0,0-4,4V192a4,4,0,0,0,8,0V132h34.34l56,56-25.17,25.17a4,4,0,0,0,5.66,5.66L172,193.66l25.17,25.17a4,4,0,0,0,5.66-5.66ZM76,44h48a40,40,0,0,1,0,80H76Z"/></svg>`;
}
