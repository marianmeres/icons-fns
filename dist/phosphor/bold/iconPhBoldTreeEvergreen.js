export const iconPhBoldTreeEvergreen = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M233.47,184.63,192.54,132H208a12,12,0,0,0,9.51-19.32l-80-104a12,12,0,0,0-19,0l-80,104A12,12,0,0,0,48,132H63.46L22.53,184.63A12,12,0,0,0,32,204h84v36a12,12,0,0,0,24,0V204h84a12,12,0,0,0,9.47-19.37ZM56.54,180l40.93-52.63A12,12,0,0,0,88,108H72.37L128,35.68,183.63,108H168a12,12,0,0,0-9.47,19.37L199.46,180Z"/></svg>`;
}
