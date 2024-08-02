export const iconPhBoldCheese = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,28a11.86,11.86,0,0,0-3.45.51l-160,48h0A12,12,0,0,0,12,88v24a12,12,0,0,0,12,12h8a12.07,12.07,0,0,1,12,11.76,11.6,11.6,0,0,1-3.43,8.38A12.88,12.88,0,0,1,31.46,148H24a12,12,0,0,0-12,12v32a12,12,0,0,0,12,12H224a20,20,0,0,0,20-20V88A60.07,60.07,0,0,0,184,28Zm1.64,24a36.06,36.06,0,0,1,32.3,24H105.76ZM152,100h32v4a16,16,0,0,1-32,0ZM96,180a16,16,0,0,1,32,0Zm124,0H152a40,40,0,0,0-80,0H36v-8.29A37.09,37.09,0,0,0,57.7,161,35.39,35.39,0,0,0,68,135.31a36.21,36.21,0,0,0-32-35.09V100h92v4a40,40,0,0,0,80,0v-4h12Z"/></svg>`;
}
