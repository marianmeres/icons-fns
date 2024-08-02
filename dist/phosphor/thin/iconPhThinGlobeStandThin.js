export const iconPhThinGlobeStandThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M136,180a76,76,0,1,0-76-76A76.08,76.08,0,0,0,136,180Zm0-144a68,68,0,1,1-68,68A68.07,68.07,0,0,1,136,36Zm74.89,140.28a4,4,0,0,1-.12,5.65,107.31,107.31,0,0,1-70.77,30V236h28a4,4,0,0,1,0,8H104a4,4,0,0,1,0-8h28V211.92A108,108,0,0,1,58.06,29.23a4,4,0,1,1,5.77,5.54,100,100,0,0,0,141.4,141.39A4,4,0,0,1,210.89,176.28Z"/></svg>`;
}
