export const iconPhBoldThreeD = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M88,148a16,16,0,0,0-16-16,12,12,0,0,1-9.83-18.88L77,92H52a12,12,0,0,1,0-24h48a12,12,0,0,1,9.83,18.88l-18.34,26.2A40,40,0,1,1,43.43,176,12,12,0,1,1,60.57,159.2,16,16,0,0,0,88,148Zm76-80a60,60,0,0,1,0,120H140a12,12,0,0,1-12-12V80a12,12,0,0,1,12-12Zm0,24H152v72h12a36,36,0,0,0,0-72ZM32,56H224a12,12,0,0,0,0-24H32a12,12,0,0,0,0,24ZM224,200H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24Z"/></svg>`;
}
