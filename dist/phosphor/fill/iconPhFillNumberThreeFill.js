export const iconPhFillNumberThreeFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM124,192a43.85,43.85,0,0,1-34.22-16.34,8,8,0,0,1,12.44-10.06A28,28,0,1,0,126,120.07a8,8,0,0,1-5.58-13.1l22.48-27H96a8,8,0,0,1,0-16h64a8,8,0,0,1,6.15,13.12l-25.23,30.27A44,44,0,0,1,124,192Z"/></svg>`;
}
