export const iconPhBoldSubtract = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M178,78A84,84,0,1,0,78,178,84,84,0,1,0,178,78ZM220,160a60.75,60.75,0,0,1-.38,6.65l-44-44a83.62,83.62,0,0,0,4-19.39A59.83,59.83,0,0,1,220,160ZM36,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,36,96Zm67.28,83.66a83.62,83.62,0,0,0,19.39-4l44,44A60.75,60.75,0,0,1,160,220,59.83,59.83,0,0,1,103.28,179.66Zm88.53,31.18-46.73-46.73a85,85,0,0,0,19-19l46.73,46.73A60.45,60.45,0,0,1,191.81,210.84Z"/></svg>`;
}
