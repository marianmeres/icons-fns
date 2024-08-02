export const iconPhThinNumberSquareTwoThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-56-32a4,4,0,0,1-4,4H104a4,4,0,0,1-3.2-6.4L144,116A20,20,0,0,0,140,88,20,20,0,0,0,112,92a20.23,20.23,0,0,0-2.89,5.37,4,4,0,0,1-7.55-2.66,28.34,28.34,0,0,1,4-7.52,28,28,0,1,1,44.72,33.7L112,172h40A4,4,0,0,1,156,176Z"/></svg>`;
}
