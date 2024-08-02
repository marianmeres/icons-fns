export const iconPhThinWashingMachineThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM128,68a60,60,0,1,0,60,60A60.07,60.07,0,0,0,128,68Zm0,112a52,52,0,1,1,52-52A52.06,52.06,0,0,1,128,180ZM196,68a8,8,0,1,1-8-8A8,8,0,0,1,196,68Zm-73.17,46.83-16,16a4,4,0,0,1-5.66-5.66l16-16a4,4,0,0,1,5.66,5.66Zm32,2.34a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66-5.66l32-32A4,4,0,0,1,154.83,117.17Z"/></svg>`;
}
