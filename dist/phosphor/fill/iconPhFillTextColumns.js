export const iconPhFillTextColumns = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM112,184H56a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm88,96H144a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H144a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H144a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H144a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Z"/></svg>`;
}
