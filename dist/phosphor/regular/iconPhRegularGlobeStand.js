export const iconPhRegularGlobeStand = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M136,184a80,80,0,1,0-80-80A80.09,80.09,0,0,0,136,184Zm0-144a64,64,0,1,1-64,64A64.07,64.07,0,0,1,136,40Zm77.77,133.5a8,8,0,0,1-.23,11.32A111.24,111.24,0,0,1,144,215.72V232h24a8,8,0,0,1,0,16H104a8,8,0,0,1,0-16h24V215.71A112,112,0,0,1,55.18,26.46,8,8,0,1,1,66.72,37.54,96,96,0,0,0,202.46,173.28,8,8,0,0,1,213.77,173.5Z"/></svg>`;
}
