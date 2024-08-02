export const iconPhBoldVirtualRealityBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M127,104.73l-24,56a12,12,0,0,1-22.06,0l-24-56A12,12,0,0,1,79,95.27l13,30.27,13-30.27A12,12,0,0,1,127,104.73ZM256,128a84.09,84.09,0,0,1-84,84H84A84,84,0,0,1,84,44h88A84.09,84.09,0,0,1,256,128Zm-24,0a60.07,60.07,0,0,0-60-60H84a60,60,0,0,0,0,120h88A60.07,60.07,0,0,0,232,128Zm-32-8a31.85,31.85,0,0,1-7.93,21.05l5.69,8A12,12,0,1,1,178.24,163l-7.91-11.06c-.77.05-1.55.09-2.33.09h-8v4a12,12,0,0,1-24,0V100a12,12,0,0,1,12-12h20A32,32,0,0,1,200,120Zm-40,8h8a8,8,0,0,0,0-16h-8Z"/></svg>`;
}
