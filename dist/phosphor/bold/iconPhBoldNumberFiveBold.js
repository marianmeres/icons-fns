export const iconPhBoldNumberFiveBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M180,160A60,60,0,0,1,80,204.72a12,12,0,1,1,16-17.88,36,36,0,1,0,.69-54.28,12,12,0,0,1-19.54-11.49L92.23,45.65A12,12,0,0,1,104,36h64a12,12,0,0,1,0,24H113.84l-8.36,41.79A60,60,0,0,1,180,160Z"/></svg>`;
}
