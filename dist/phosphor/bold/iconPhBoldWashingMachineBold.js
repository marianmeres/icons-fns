export const iconPhBoldWashingMachineBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M160,80a16,16,0,1,1,16,16A16,16,0,0,1,160,80Zm72-36V212a20,20,0,0,1-20,20H44a20,20,0,0,1-20-20V44A20,20,0,0,1,44,24H212A20,20,0,0,1,232,44Zm-24,4H48V208H208Zm-68.49,75.51-16,16a12,12,0,0,0,17,17l16-16a12,12,0,1,0-17-17Zm-15-16a12,12,0,0,0-17,0l-8,8a12,12,0,0,0,17,17l8-8A12,12,0,0,0,124.49,107.51ZM128,196a68.05,68.05,0,0,0,67.19-78.52,12,12,0,0,0-23.72,3.69,44,44,0,1,1-36.64-36.64,12,12,0,0,0,3.69-23.72A68,68,0,1,0,128,196Z"/></svg>`;
}
