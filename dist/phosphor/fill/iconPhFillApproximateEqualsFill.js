export const iconPhFillApproximateEqualsFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM197.2,160.87c-13.07,11.18-24.9,15.1-35.64,15.1-14.26,0-26.62-6.92-37.47-13-18.41-10.31-32.95-18.45-54.89.31a8,8,0,1,1-10.4-12.16c30.42-26,54.09-12.76,73.11-2.11,18.41,10.31,33,18.45,54.89-.31a8,8,0,0,1,10.4,12.16Zm0-56c-13.07,11.18-24.9,15.1-35.64,15.1-14.26,0-26.62-6.92-37.47-13-18.41-10.31-32.95-18.45-54.89.31A8,8,0,0,1,58.8,95.13c30.42-26,54.09-12.76,73.11-2.11,18.41,10.31,33,18.45,54.89-.31a8,8,0,1,1,10.4,12.16Z"/></svg>`;
}
