export const iconPhThinOnigiriThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228.11,148.63l-55.88-96-.06-.09a52,52,0,0,0-88.34,0l-.06.09-55.88,96A52,52,0,0,0,72.09,228H183.91a52,52,0,0,0,44.2-79.37ZM164,220H92V168a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4Zm58.36-22.61A43.43,43.43,0,0,1,183.91,220H172V168a12,12,0,0,0-12-12H96a12,12,0,0,0-12,12v52H72.09a44,44,0,0,1-37.37-67.2.31.31,0,0,1,.05-.1L90.65,56.75a44,44,0,0,1,74.7,0l55.88,95.95a.31.31,0,0,1,.05.1A43.43,43.43,0,0,1,222.35,197.39Z"/></svg>`;
}
