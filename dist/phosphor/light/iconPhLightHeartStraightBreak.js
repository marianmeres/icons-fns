export const iconPhLightHeartStraightBreak = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M221.62,58.38a56.06,56.06,0,0,0-79.16,0L128,72.24l-14.44-13.9a56,56,0,0,0-79.2,79.21l89.37,90.66a6,6,0,0,0,8.55,0l89.33-90.63A56.06,56.06,0,0,0,221.62,58.38Zm-8.51,70.75L128,215.45,42.89,129.1a44,44,0,0,1,62.23-62.24l.08.08,14.16,13.64L107.85,91.66a6,6,0,0,0-.08,8.56L135.53,128l-11.76,11.76a6,6,0,1,0,8.49,8.48l16-16a6,6,0,0,0,0-8.49L120.58,96.06l30.24-29.12a.3.3,0,0,0,.08-.08,44,44,0,1,1,62.21,62.27Z"/></svg>`;
}
