export const iconPhBoldVinylRecordBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm0-128a44.05,44.05,0,0,0-44,44,12,12,0,0,1-24,0,68.07,68.07,0,0,1,68-68,12,12,0,0,1,0,24Zm68,44a68.07,68.07,0,0,1-68,68,12,12,0,0,1,0-24,44.05,44.05,0,0,0,44-44,12,12,0,0,1,24,0Zm-68,28a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"/></svg>`;
}
