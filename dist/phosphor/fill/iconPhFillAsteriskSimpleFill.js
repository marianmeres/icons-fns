export const iconPhFillAsteriskSimpleFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm63.34,91.83-50.4,16.38,31.15,42.87a8,8,0,1,1-12.94,9.4L128,141.61,96.85,184.48a8,8,0,0,1-12.94-9.4l31.15-42.87-50.4-16.38a8,8,0,0,1,4.94-15.22L120,117V64a8,8,0,0,1,16,0v53l50.4-16.38a8,8,0,0,1,4.94,15.22Z"/></svg>`;
}
