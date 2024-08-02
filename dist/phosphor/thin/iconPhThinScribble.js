export const iconPhThinScribble = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M202.84,186.83a18.61,18.61,0,0,0,0,26.34,4,4,0,0,1-5.66,5.66,26.63,26.63,0,0,1,0-37.66l9.38-9.37a18.63,18.63,0,1,0-26.35-26.34L113.45,212.2a26.63,26.63,0,0,1-37.66-37.66L174.55,75.8A18.63,18.63,0,1,0,148.2,49.46L81.45,116.2A26.63,26.63,0,0,1,43.79,78.54L85.17,37.17a4,4,0,1,1,5.65,5.66L49.44,84.2a18.63,18.63,0,1,0,26.35,26.34L142.55,43.8a26.63,26.63,0,0,1,37.66,37.66L81.45,180.2a18.63,18.63,0,1,0,26.35,26.34l66.75-66.74a26.63,26.63,0,0,1,37.66,37.66Z"/></svg>`;
}
