export const iconPhThinDeviceRotate = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M202.83,218.83l-24,24a4,4,0,0,1-5.66-5.66L190.34,220H80a20,20,0,0,1-20-20V104a4,4,0,0,1,8,0v96a12,12,0,0,0,12,12H190.34l-17.17-17.17a4,4,0,0,1,5.66-5.66l24,24A4,4,0,0,1,202.83,218.83ZM80,68a4,4,0,0,0,2.83-6.83L65.66,44H176a12,12,0,0,1,12,12v96a4,4,0,0,0,8,0V56a20,20,0,0,0-20-20H65.66L82.83,18.83a4,4,0,0,0-5.66-5.66l-24,24a4,4,0,0,0,0,5.66l24,24A4,4,0,0,0,80,68Z"/></svg>`;
}
