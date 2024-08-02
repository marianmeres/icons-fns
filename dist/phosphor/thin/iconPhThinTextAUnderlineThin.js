export const iconPhThinTextAUnderlineThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M62.3,171.62a4,4,0,0,0,5.32-1.92L85.36,132h85.28l17.74,37.7a4,4,0,1,0,7.24-3.4l-64-136a4,4,0,0,0-7.24,0l-64,136A4,4,0,0,0,62.3,171.62ZM128,41.39,166.87,124H89.13ZM220,216a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,216Z"/></svg>`;
}
