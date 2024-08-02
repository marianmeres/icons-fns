export const iconPhFillFileImage = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M158.66,219.56A8,8,0,0,1,152,232H24a8,8,0,0,1-6.73-12.33l36-56a8,8,0,0,1,13.46,0l9.76,15.18,20.85-31.29a8,8,0,0,1,13.32,0ZM216,88V216a16,16,0,0,1-16,16h-8a8,8,0,0,1,0-16h8V96H152a8,8,0,0,1-8-8V40H56v88a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Z"/></svg>`;
}
