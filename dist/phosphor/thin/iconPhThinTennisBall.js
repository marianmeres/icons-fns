export const iconPhThinTennisBall = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M198.74,57.29A99.39,99.39,0,0,0,128,28h-.19a100,100,0,1,0,70.93,29.29ZM62.92,63a91.38,91.38,0,0,1,60.8-26.85A91.31,91.31,0,0,1,96.87,96.89,91.44,91.44,0,0,1,36.1,123.73,91.61,91.61,0,0,1,62.92,63ZM36.09,131.74a99.36,99.36,0,0,0,66.44-29.2,99.25,99.25,0,0,0,29.21-66.45,91.9,91.9,0,0,1,88.17,88.17,100,100,0,0,0-95.65,95.65,91.9,91.9,0,0,1-88.17-88.17Zm157,61.31a91.38,91.38,0,0,1-60.8,26.85,92,92,0,0,1,87.62-87.63A91.61,91.61,0,0,1,193.08,193.05Z"/></svg>`;
}
