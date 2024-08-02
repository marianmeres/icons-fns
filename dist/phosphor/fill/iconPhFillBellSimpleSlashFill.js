export const iconPhFillBellSimpleSlashFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M221.84,192v0a1.85,1.85,0,0,1-3,.28L83.27,43.19a4,4,0,0,1,.8-6A79.55,79.55,0,0,1,129.17,24C173,24.66,207.8,61.1,208,104.92c.14,34.88,8.31,61.54,13.82,71A15.89,15.89,0,0,1,221.84,192ZM160,216H96.22A8.19,8.19,0,0,0,88,223.47,8,8,0,0,0,96,232h63.74a8.19,8.19,0,0,0,8.26-7.47A8,8,0,0,0,160,216ZM53.84,34.62A8,8,0,1,0,42,45.38L58.79,63.85A79.42,79.42,0,0,0,47.93,104c0,35.09-8.15,62-13.7,71.73a16.42,16.42,0,0,0,.09,16.68A15.78,15.78,0,0,0,47.91,200H182.62l19.45,21.38a8,8,0,0,0,11.85-10.76Z"/></svg>`;
}
