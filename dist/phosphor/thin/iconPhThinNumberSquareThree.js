export const iconPhThinNumberSquareThree = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-56-60a32,32,0,0,1-54.86,22.4,4,4,0,1,1,5.72-5.6A24,24,0,1,0,124,124a4,4,0,0,1-3.28-6.29L144.32,84H104a4,4,0,0,1,0-8h48a4,4,0,0,1,3.28,6.29L131.12,116.8A32.06,32.06,0,0,1,156,148Z"/></svg>`;
}
