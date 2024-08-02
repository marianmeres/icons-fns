export const iconPhThinHeartStraightThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220.18,59.79a54.05,54.05,0,0,0-76.31,0L128,74.51,112.13,59.74A54,54,0,0,0,35.8,136.15l89.35,90.66a4,4,0,0,0,5.7,0l89.33-90.64a54,54,0,0,0,0-76.38Zm-5.67,70.74L128,218.3,41.47,130.51a46,46,0,0,1,65.06-65.06l.1.1,18.64,17.36a4,4,0,0,0,5.46,0l18.64-17.36.1-.1a46,46,0,1,1,65,65.08Z"/></svg>`;
}
