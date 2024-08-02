export const iconPhFillLegoSmiley = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,48H168V32a16,16,0,0,0-16-16H104A16,16,0,0,0,88,32V48H72A32,32,0,0,0,40,80v96a32.06,32.06,0,0,0,24,31v17a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V207a32.06,32.06,0,0,0,24-31V80A32,32,0,0,0,184,48Zm-28,52a12,12,0,1,1-12,12A12,12,0,0,1,156,100Zm4.27,58.77a61,61,0,0,1-64.54,0,8,8,0,0,1,8.54-13.54,45,45,0,0,0,47.46,0,8,8,0,0,1,8.54,13.54ZM104,32h48V48H104Zm-4,68a12,12,0,1,1-12,12A12,12,0,0,1,100,100Zm76,124H80V208h96Z"/></svg>`;
}
