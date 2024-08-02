export const iconPhThinDevToLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,60H24A12,12,0,0,0,12,72V184a12,12,0,0,0,12,12H232a12,12,0,0,0,12-12V72A12,12,0,0,0,232,60Zm4,124a4,4,0,0,1-4,4H24a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4H232a4,4,0,0,1,4,4ZM124,100v24h12a4,4,0,0,1,0,8H124v24h20a4,4,0,0,1,0,8H120a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4h24a4,4,0,0,1,0,8Zm87.85-2.92-18,64a4,4,0,0,1-7.7,0l-18-64a4,4,0,1,1,7.7-2.16L190,145.23l14.15-50.31a4,4,0,0,1,7.7,2.16ZM64,92H56a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4h8a28,28,0,0,0,28-28V120A28,28,0,0,0,64,92Zm20,44a20,20,0,0,1-20,20H60V100h4a20,20,0,0,1,20,20Z"/></svg>`;
}
