export const iconPhLightPersonSimpleTaiChiLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,78A30,30,0,1,0,98,48,30,30,0,0,0,128,78Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,128,30Zm94,74a6,6,0,0,1-6,6H134v30l52.36,22.45A6,6,0,0,1,190,168v48a6,6,0,0,1-12,0V172L129.16,151,52,220.46a6,6,0,0,1-8-8.92l78-70.21V110H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,104Z"/></svg>`;
}
