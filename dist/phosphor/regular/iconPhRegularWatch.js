export const iconPhRegularWatch = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,128a79.94,79.94,0,0,0-32.7-64.47l-6.24-34.38A16,16,0,0,0,153.32,16H102.68A16,16,0,0,0,86.94,29.15L80.7,63.53a79.9,79.9,0,0,0,0,128.94l6.24,34.38A16,16,0,0,0,102.68,240h50.64a16,16,0,0,0,15.74-13.15l6.24-34.38A79.94,79.94,0,0,0,208,128ZM102.68,32h50.64l3.91,21.55a79.75,79.75,0,0,0-58.46,0ZM64,128a64,64,0,1,1,64,64A64.07,64.07,0,0,1,64,128Zm89.32,96H102.68l-3.91-21.55a79.75,79.75,0,0,0,58.46,0ZM120,128V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16H128A8,8,0,0,1,120,128Z"/></svg>`;
}
