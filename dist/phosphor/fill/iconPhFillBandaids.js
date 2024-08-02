export const iconPhFillBandaids = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,116a12,12,0,1,1-12,12A12,12,0,0,1,128,116Zm84.28,39.72a40,40,0,1,1-56.56,56.56L128,184.57l-27.72,27.71a40,40,0,1,1-56.56-56.56L71.43,128,43.72,100.28a40,40,0,1,1,56.56-56.56L128,71.43l27.72-27.71a40,40,0,1,1,56.56,56.56L184.57,128Zm-95.59,17.53L82.75,139.31,55,167A24,24,0,1,0,89,201ZM161.94,128,128,94.06,94.06,128,128,161.94Zm39-39A24,24,0,1,0,167,55L139.31,82.75l33.94,33.94Z"/></svg>`;
}
