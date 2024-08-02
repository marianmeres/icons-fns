export const iconPhBoldShieldChevronBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,36H48A20,20,0,0,0,28,56v56c0,54.29,26.32,87.22,48.4,105.29,23.71,19.39,47.44,26,48.44,26.29a12.1,12.1,0,0,0,6.32,0c1-.28,24.73-6.9,48.44-26.29,22.08-18.07,48.4-51,48.4-105.29V56A20,20,0,0,0,208,36ZM52,60H204v52a119.54,119.54,0,0,1-7,41.64l-62.11-43.47a12,12,0,0,0-13.76,0L59,153.64A119.54,119.54,0,0,1,52,112ZM165.09,198.15A126.28,126.28,0,0,1,128,219.38a126.14,126.14,0,0,1-37.09-21.23A109,109,0,0,1,70,175.23l58-40.58,58,40.58A109,109,0,0,1,165.09,198.15Z"/></svg>`;
}
