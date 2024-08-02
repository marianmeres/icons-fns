export const iconPhThinCurrencyCircleDollarThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm36-72a24,24,0,0,1-24,24h-8v12a4,4,0,0,1-8,0V172H104a4,4,0,0,1,0-8h36a16,16,0,0,0,0-32H116a24,24,0,0,1,0-48h8V72a4,4,0,0,1,8,0V84h20a4,4,0,0,1,0,8H116a16,16,0,0,0,0,32h24A24,24,0,0,1,164,148Z"/></svg>`;
}
