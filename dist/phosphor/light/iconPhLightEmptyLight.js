export const iconPhLightEmptyLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M195.51,62.66,212.44,44A6,6,0,1,0,203.56,36L186.63,54.58A94,94,0,0,0,60.49,193.34L43.56,212A6,6,0,0,0,52.44,220l16.93-18.62A94,94,0,0,0,195.51,62.66ZM46,128A81.93,81.93,0,0,1,178.53,63.49L68.59,184.43A81.69,81.69,0,0,1,46,128Zm82,82a81.57,81.57,0,0,1-50.53-17.49L187.41,71.57A81.94,81.94,0,0,1,128,210Z"/></svg>`;
}
