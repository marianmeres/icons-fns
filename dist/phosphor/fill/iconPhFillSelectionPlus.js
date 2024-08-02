export const iconPhFillSelectionPlus = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM56,72A16,16,0,0,1,72,56H96a8,8,0,0,1,0,16H72V96a8,8,0,0,1-16,0Zm56,112H72a16,16,0,0,1-16-16V136a8,8,0,0,1,16,0v32h40a8,8,0,0,1,0,16ZM128,64a8,8,0,0,1,8-8h32a16,16,0,0,1,16,16v40a8,8,0,0,1-16,0V72H136A8,8,0,0,1,128,64Zm72,120H184v16a8,8,0,0,1-16,0V184H152a8,8,0,0,1,0-16h16V152a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Z"/></svg>`;
}
