export const iconPhLightGlobeStand = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M136,182a78,78,0,1,0-78-78A78.09,78.09,0,0,0,136,182Zm0-144a66,66,0,1,1-66,66A66.08,66.08,0,0,1,136,38Zm76.33,136.89a6,6,0,0,1-.17,8.48A109.21,109.21,0,0,1,142,213.83V234h26a6,6,0,0,1,0,12H104a6,6,0,0,1,0-12h26V213.83a110,110,0,0,1-73.38-186,6,6,0,0,1,8.66,8.32A98,98,0,0,0,203.84,174.72,6,6,0,0,1,212.33,174.89Z"/></svg>`;
}
