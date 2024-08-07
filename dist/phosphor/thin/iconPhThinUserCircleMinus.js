export const iconPhThinUserCircleMinus = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172,56a4,4,0,0,1,4-4h48a4,4,0,0,1,0,8H176A4,4,0,0,1,172,56Zm50.31,38.67A100,100,0,1,1,128,28a100.69,100.69,0,0,1,16.66,1.38,4,4,0,0,1-1.32,7.89A93.4,93.4,0,0,0,128,36,92,92,0,0,0,62.83,192.87a75.61,75.61,0,0,1,44.51-34,44,44,0,1,1,41.32,0,75.61,75.61,0,0,1,44.51,34,92,92,0,0,0,21.6-95.54,4,4,0,1,1,7.54-2.66ZM128,156a36,36,0,1,0-36-36A36,36,0,0,0,128,156Zm0,64a91.61,91.61,0,0,0,59.14-21.58,68,68,0,0,0-118.27,0A91.56,91.56,0,0,0,128,220Z"/></svg>`;
}
