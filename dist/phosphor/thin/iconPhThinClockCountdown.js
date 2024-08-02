export const iconPhThinClockCountdown = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,136.33A100.13,100.13,0,1,1,119.67,28a4,4,0,1,1,.66,8A92.13,92.13,0,1,0,220,135.67a4,4,0,1,1,8,.66ZM128,132h56a4,4,0,0,0,0-8H132V72a4,4,0,0,0-8,0v56A4,4,0,0,0,128,132Zm32-88a8,8,0,1,0-8-8A8,8,0,0,0,160,44Zm36,24a8,8,0,1,0-8-8A8,8,0,0,0,196,68Zm24,36a8,8,0,1,0-8-8A8,8,0,0,0,220,104Z"/></svg>`;
}
