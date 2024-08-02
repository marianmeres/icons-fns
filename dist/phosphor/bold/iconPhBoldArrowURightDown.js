export const iconPhBoldArrowURightDown = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224.49,184.49l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,1,1,17-17L156,195V88a44,44,0,0,0-88,0v88a12,12,0,0,1-24,0V88a68,68,0,0,1,136,0V195l27.51-27.52a12,12,0,0,1,17,17Z"/></svg>`;
}
