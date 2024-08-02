export const iconPhBoldMopedFront = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,36H170.32a44,44,0,0,0-84.64,0H48a12,12,0,0,0,0,24H85.68a43.89,43.89,0,0,0,9,16.73A68,68,0,0,0,60,136v64a20,20,0,0,0,20,20H96a32,32,0,0,0,64,0h16a20,20,0,0,0,20-20V136a68,68,0,0,0-34.72-59.27,43.89,43.89,0,0,0,9-16.73H208a12,12,0,0,0,0-24ZM136,220a8,8,0,0,1-16,0V164a8,8,0,0,1,16,0Zm36-24H160V164a32,32,0,0,0-64,0v32H84V136a44,44,0,0,1,88,0ZM108,48a20,20,0,1,1,20,20A20,20,0,0,1,108,48Z"/></svg>`;
}
