export const iconPhLightTextSubscript = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M246,208a6,6,0,0,1-6,6H192a6,6,0,0,1-4.8-9.6l43.17-57.56A18,18,0,1,0,199,130a6,6,0,1,1-11.31-4A30,30,0,1,1,240,154.06L204,202h36A6,6,0,0,1,246,208ZM147.93,51.47a6,6,0,0,0-8.46.6L92,106.84,44.53,52.07a6,6,0,1,0-9.06,7.86L84.06,116,35.47,172.07a6,6,0,1,0,9.06,7.86L92,125.16l47.47,54.77a6,6,0,0,0,9.06-7.86L99.94,116l48.59-56.07A6,6,0,0,0,147.93,51.47Z"/></svg>`;
}
