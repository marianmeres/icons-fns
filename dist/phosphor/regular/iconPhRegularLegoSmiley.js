export const iconPhRegularLegoSmiley = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M100,124a12,12,0,1,1,12-12A12,12,0,0,1,100,124Zm56-24a12,12,0,1,0,12,12A12,12,0,0,0,156,100Zm-4.27,45.23a45,45,0,0,1-47.46,0,8,8,0,0,0-8.54,13.54,61,61,0,0,0,64.54,0,8,8,0,0,0-8.54-13.54ZM216,80v96a32.06,32.06,0,0,1-24,31v17a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V207a32.06,32.06,0,0,1-24-31V80A32,32,0,0,1,72,48H88V32a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V48h16A32,32,0,0,1,216,80ZM104,48h48V32H104Zm72,176V208H80v16ZM200,80a16,16,0,0,0-16-16H72A16,16,0,0,0,56,80v96a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16Z"/></svg>`;
}
