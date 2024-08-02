export const iconPhThinMopedFront = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,44H163.77a36,36,0,0,0-71.54,0H48a4,4,0,0,0,0,8H92.23a36.06,36.06,0,0,0,17.34,26.91A60.11,60.11,0,0,0,68,136v64a12,12,0,0,0,12,12h20v4a28,28,0,0,0,56,0v-4h20a12,12,0,0,0,12-12V136a60.11,60.11,0,0,0-41.57-57.09A36.06,36.06,0,0,0,163.77,52H208a4,4,0,0,0,0-8ZM148,216a20,20,0,0,1-40,0V168a20,20,0,0,1,40,0Zm32-80v64a4,4,0,0,1-4,4H156V168a28,28,0,0,0-56,0v36H80a4,4,0,0,1-4-4V136a52,52,0,0,1,104,0ZM128,76a28,28,0,1,1,28-28A28,28,0,0,1,128,76Z"/></svg>`;
}
