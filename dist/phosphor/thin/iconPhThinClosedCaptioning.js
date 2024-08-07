export const iconPhThinClosedCaptioning = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,52H32A12,12,0,0,0,20,64V192a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52Zm4,140a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4ZM115.46,153.71a4,4,0,0,1-1.46,5.47,36,36,0,1,1,0-62.36,4,4,0,0,1-4,6.92,28,28,0,1,0,0,48.52A4,4,0,0,1,115.46,153.71Zm80,0a4,4,0,0,1-1.46,5.47,36,36,0,1,1,0-62.36,4,4,0,0,1-4,6.92,28,28,0,1,0,0,48.52A4,4,0,0,1,195.46,153.71Z"/></svg>`;
}
