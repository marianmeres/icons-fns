export const iconPhBoldShuffleSimpleBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,48V88a12,12,0,0,1-24,0V77L164.77,108.2a12,12,0,0,1-17-17L179,60H168a12,12,0,0,1,0-24h40A12,12,0,0,1,220,48ZM208,156a12,12,0,0,0-12,12v11L56.49,39.51a12,12,0,0,0-17,17L179,196H168a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V168A12,12,0,0,0,208,156ZM91.23,147.8,39.51,199.51a12,12,0,0,0,17,17l51.71-51.72a12,12,0,0,0-17-17Z"/></svg>`;
}
