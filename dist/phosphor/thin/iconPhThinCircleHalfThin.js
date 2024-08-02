export const iconPhThinCircleHalfThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,8.09a91.58,91.58,0,0,1,24,4.27V215.64a91.58,91.58,0,0,1-24,4.27Zm32,7.25a92.21,92.21,0,0,1,24,15V197.69a92.21,92.21,0,0,1-24,15ZM36,128a92.11,92.11,0,0,1,88-91.91V219.91A92.11,92.11,0,0,1,36,128Zm160,61.9V66.1a91.83,91.83,0,0,1,0,123.8Z"/></svg>`;
}
