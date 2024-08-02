export const iconPhBoldEmpty = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M203.63,62.65l13.25-14.58a12,12,0,0,0-17.76-16.14L185.88,46.49A100,100,0,0,0,52.37,193.35L39.12,207.93a12,12,0,1,0,17.76,16.14l13.24-14.56A100,100,0,0,0,203.63,62.65ZM52,128A75.94,75.94,0,0,1,169.58,64.43l-100.91,111A75.6,75.6,0,0,1,52,128Zm76,76a75.52,75.52,0,0,1-41.58-12.43l100.91-111A75.94,75.94,0,0,1,128,204Z"/></svg>`;
}
