export const iconPhLightQueue = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm102,58H40a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12Zm0,64H40a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12Zm110-26a6,6,0,0,1-2.82,5.09l-64,40A6,6,0,0,1,170,200V120a6,6,0,0,1,9.18-5.09l64,40A6,6,0,0,1,246,160Zm-17.32,0L182,130.83v58.34Z"/></svg>`;
}
