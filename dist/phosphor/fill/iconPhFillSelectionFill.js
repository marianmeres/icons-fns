export const iconPhFillSelectionFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,200H72a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Zm0-128H72v32a8,8,0,0,1-16,0V72A16,16,0,0,1,72,56h32a8,8,0,0,1,0,16Zm96,112a16,16,0,0,1-16,16H152a8,8,0,0,1,0-16h32V152a8,8,0,0,1,16,0Zm0-80a8,8,0,0,1-16,0V72H152a8,8,0,0,1,0-16h32a16,16,0,0,1,16,16Z"/></svg>`;
}
