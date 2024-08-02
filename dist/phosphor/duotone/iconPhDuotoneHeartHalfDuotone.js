export const iconPhDuotoneHeartHalfDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,80V224S24,168,24,102A54,54,0,0,1,78,48C100.59,48,119.94,60.31,128,80Z" opacity="0.2"/><path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM32,102A46.06,46.06,0,0,1,78,56c18.91,0,34.86,9.79,42,25.65V210C93.59,193.44,32,149.78,32,102ZM136,210V81.65C143.14,65.79,159.09,56,178,56a46.06,46.06,0,0,1,46,46C224,149.71,162.42,193.41,136,210Z"/></svg>`;
}
