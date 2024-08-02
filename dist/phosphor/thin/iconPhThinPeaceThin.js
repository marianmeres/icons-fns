export const iconPhThinPeaceThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm92,100a91.44,91.44,0,0,1-14.44,49.43L132,125.92V36.09A92.11,92.11,0,0,1,220,128ZM124,36.09v89.83L50.44,177.43A92,92,0,0,1,124,36.09ZM55,184l69-48.29v84.23A91.94,91.94,0,0,1,55,184Zm77,35.94V135.68L201,184A91.94,91.94,0,0,1,132,219.91Z"/></svg>`;
}
