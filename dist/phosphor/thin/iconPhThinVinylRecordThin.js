export const iconPhThinVinylRecordThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm0-152a60.07,60.07,0,0,0-60,60,4,4,0,0,1-8,0,68.07,68.07,0,0,1,68-68,4,4,0,0,1,0,8Zm68,60a68.07,68.07,0,0,1-68,68,4,4,0,0,1,0-8,60.07,60.07,0,0,0,60-60,4,4,0,0,1,8,0Zm-40,0a28,28,0,1,0-28,28A28,28,0,0,0,156,128Zm-48,0a20,20,0,1,1,20,20A20,20,0,0,1,108,128Z"/></svg>`;
}
