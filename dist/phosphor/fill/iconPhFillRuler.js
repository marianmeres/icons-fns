export const iconPhFillRuler = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M235.32,96,96,235.31a16,16,0,0,1-22.63,0L20.68,182.63a16,16,0,0,1,0-22.63l29.17-29.17a4,4,0,0,1,5.66,0l34.83,34.83a8,8,0,0,0,11.71-.43,8.18,8.18,0,0,0-.6-11.09L66.82,119.51a4,4,0,0,1,0-5.65l15-15a4,4,0,0,1,5.66,0l34.83,34.83a8,8,0,0,0,11.71-.43,8.18,8.18,0,0,0-.6-11.09L98.83,87.51a4,4,0,0,1,0-5.65l15-15a4,4,0,0,1,5.65,0l34.83,34.83a8,8,0,0,0,11.72-.43,8.18,8.18,0,0,0-.61-11.09L130.83,55.51a4,4,0,0,1,0-5.65L160,20.69a16,16,0,0,1,22.63,0l52.69,52.68A16,16,0,0,1,235.32,96Z"/></svg>`;
}
