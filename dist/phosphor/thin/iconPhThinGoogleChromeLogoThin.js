export const iconPhThinGoogleChromeLogoThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,8a92.08,92.08,0,0,1,80.78,48H128a44.05,44.05,0,0,0-43.82,40.11L54.51,72.72A91.9,91.9,0,0,1,128,36Zm0,128a36,36,0,1,1,36-36A36,36,0,0,1,128,164ZM36,128A91.52,91.52,0,0,1,49.51,80.05L89.9,150c0,.09.11.17.17.26a43.93,43.93,0,0,0,56.47,17.63l-29.7,51.43A92.13,92.13,0,0,1,36,128Zm92,92c-.77,0-1.53,0-2.29,0l40.39-70a1.21,1.21,0,0,0,.09-.2A43.89,43.89,0,0,0,153.25,92h59.41A92,92,0,0,1,128,220Z"/></svg>`;
}
