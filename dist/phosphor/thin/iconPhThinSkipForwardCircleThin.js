export const iconPhThinSkipForwardCircleThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM160,84a4,4,0,0,0-4,4v32.78L98.12,84.61A4,4,0,0,0,92,88v80a4,4,0,0,0,2.06,3.5A4.06,4.06,0,0,0,96,172a4,4,0,0,0,2.12-.61L156,135.22V168a4,4,0,0,0,8,0V88A4,4,0,0,0,160,84Zm-60,76.78V95.22L152.45,128Z"/></svg>`;
}
