export const iconPhBoldTumblrLogoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,124a12,12,0,0,0,12-12V72a12,12,0,0,0-12-12H156V24a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12A36,36,0,0,1,64,60,12,12,0,0,0,52,72v40a12,12,0,0,0,12,12H84v52a68.07,68.07,0,0,0,68,68h40a12,12,0,0,0,12-12V184a12,12,0,0,0-12-12H160a4,4,0,0,1-4-4V124Zm-32,72h20v24H152a44.05,44.05,0,0,1-44-44V112a12,12,0,0,0-12-12H76V82.79A60.18,60.18,0,0,0,122.79,36H132V72a12,12,0,0,0,12,12h36v16H144a12,12,0,0,0-12,12v56A28,28,0,0,0,160,196Z"/></svg>`;
}
