export const iconPhBoldCloudRainBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M156,12A80.22,80.22,0,0,0,82.39,60.36,56.76,56.76,0,0,0,76,60a56,56,0,0,0,0,112h29.58L86,201.34a12,12,0,1,0,20,13.32L134.42,172H156a80,80,0,0,0,0-160Zm0,136H76a32,32,0,0,1,0-64h.28c-.11,1.1-.2,2.2-.26,3.3a12,12,0,1,0,24,1.39A56.06,56.06,0,1,1,156,148Zm.65,58.66-26.67,40a12,12,0,1,1-20-13.32l26.66-40a12,12,0,1,1,20,13.32Z"/></svg>`;
}
