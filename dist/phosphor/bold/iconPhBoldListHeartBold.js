export const iconPhBoldListHeartBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M124,192a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24h72A12,12,0,0,1,124,192ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm0,64H96a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm212,4c0,17-9.53,33.56-28.32,49.22a151.47,151.47,0,0,1-26.31,17.51,12,12,0,0,1-10.74,0,151.47,151.47,0,0,1-26.31-17.51C141.53,177.56,132,161,132,144a36,36,0,0,1,60-26.81A36,36,0,0,1,252,144Zm-24,0a12,12,0,0,0-24,0,12,12,0,0,1-24,0,12,12,0,0,0-24,0c0,17.23,22.85,34.43,36,42.29C205.14,178.44,228,161.23,228,144Z"/></svg>`;
}
