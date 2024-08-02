export const iconPhThinDisc = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm35.77,96a35.78,35.78,0,0,0-7.66-18.45l39.68-39.68A91.64,91.64,0,0,1,219.91,124ZM156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Zm-28,92A92,92,0,1,1,190.13,60.21L150.45,99.89A36,36,0,1,0,163.77,132h56.14A92.11,92.11,0,0,1,128,220Z"/></svg>`;
}
