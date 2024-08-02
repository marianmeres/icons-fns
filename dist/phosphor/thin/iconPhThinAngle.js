export const iconPhThinAngle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M100,72a4,4,0,0,1,4-4A100.11,100.11,0,0,1,204,168a4,4,0,0,1-8,0,92.1,92.1,0,0,0-92-92A4,4,0,0,1,100,72ZM240,196H76V32a4,4,0,0,0-8,0V68H32a4,4,0,0,0,0,8H68V200a4,4,0,0,0,4,4H240a4,4,0,0,0,0-8Z"/></svg>`;
}
