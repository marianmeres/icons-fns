export const iconPhLightPersonSimpleBike = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M164,78a26,26,0,1,0-26-26A26,26,0,0,0,164,78Zm0-40a14,14,0,1,1-14,14A14,14,0,0,1,164,38Zm36,100a38,38,0,1,0,38,38A38,38,0,0,0,200,138Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,200,202ZM56,138a38,38,0,1,0,38,38A38,38,0,0,0,56,138Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,56,202Zm136-84H152a6,6,0,0,1-4.24-1.76L120,88.49,96.49,112l35.75,35.76A6,6,0,0,1,134,152v48a6,6,0,0,1-12,0V154.49L83.76,116.24a6,6,0,0,1,0-8.48l32-32a6,6,0,0,1,8.48,0L154.49,106H192a6,6,0,0,1,0,12Z"/></svg>`;
}
