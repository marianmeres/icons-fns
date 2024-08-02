export const iconPhBoldCubeFocusBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236,48V88a12,12,0,0,1-24,0V60H184a12,12,0,0,1,0-24h40A12,12,0,0,1,236,48ZM72,196H44V168a12,12,0,0,0-24,0v40a12,12,0,0,0,12,12H72a12,12,0,0,0,0-24Zm152-40a12,12,0,0,0-12,12v28H184a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V168A12,12,0,0,0,224,156ZM32,100A12,12,0,0,0,44,88V60H72a12,12,0,0,0,0-24H32A12,12,0,0,0,20,48V88A12,12,0,0,0,32,100Zm158,70.42-56,32a12,12,0,0,1-11.9,0l-56-32A12,12,0,0,1,60,160V96a12,12,0,0,1,6-10.42l56-32a12,12,0,0,1,11.9,0l56,32A12,12,0,0,1,196,96v64A12,12,0,0,1,190,170.42ZM96.19,96,128,114.18,159.81,96,128,77.82ZM84,153l32,18.28V135L84,116.68Zm88,0V116.68L140,135v36.36Z"/></svg>`;
}
