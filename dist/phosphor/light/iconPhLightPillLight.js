export const iconPhLightPillLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M215,41a51.28,51.28,0,0,0-72.5,0L41,142.5A51.26,51.26,0,0,0,113.49,215L215,113.5A51.31,51.31,0,0,0,215,41ZM105,206.5A39.26,39.26,0,0,1,49.48,151L96,104.49,151.52,160ZM206.52,105,160,151.51,104.48,96,151,49.5A39.26,39.26,0,0,1,206.52,105ZM188.26,83.76a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.49-8.48l24-24A6,6,0,0,1,188.26,83.76Z"/></svg>`;
}
