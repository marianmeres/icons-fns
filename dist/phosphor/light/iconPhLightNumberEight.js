export const iconPhLightNumberEight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M151.62,119.45a46,46,0,1,0-47.24,0,54,54,0,1,0,47.24,0ZM94,80a34,34,0,1,1,34,34A34,34,0,0,1,94,80Zm34,130a42,42,0,1,1,42-42A42,42,0,0,1,128,210Z"/></svg>`;
}
