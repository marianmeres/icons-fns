export const iconPhThinBoules = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm62.13,32.21L60.21,190.13a91.94,91.94,0,0,1-14.88-21.8l123-123A91.94,91.94,0,0,1,190.13,60.21Zm5.66,5.66a92.24,92.24,0,0,1,14.88,21.8l-123,123a92.24,92.24,0,0,1-21.8-14.88ZM128,36a91.4,91.4,0,0,1,32.43,5.91L41.91,160.43A92,92,0,0,1,128,36Zm0,184a91.4,91.4,0,0,1-32.43-5.91L214.09,95.57A92,92,0,0,1,128,220Z"/></svg>`;
}
