export const iconPhFillNetworkSlashFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M98.08,59.41A8,8,0,0,1,96,54V40a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V72a16,16,0,0,1-16,16H127.61a8,8,0,0,1-5.92-2.62ZM53.92,34.62A8,8,0,1,0,42.08,45.38L102.64,112H24a8,8,0,0,0,0,16H56v32H48a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16H72V128h45.19l84.89,93.38a8,8,0,1,0,11.84-10.76ZM232,112H164a8,8,0,0,0,0,16h20v22.83a8,8,0,1,0,16,0V128h32a8,8,0,0,0,0-16Z"/></svg>`;
}
