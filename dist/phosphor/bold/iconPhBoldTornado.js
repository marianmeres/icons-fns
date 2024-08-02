export const iconPhBoldTornado = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,44a12,12,0,0,1-12,12H60a12,12,0,0,1,0-24H220A12,12,0,0,1,232,44ZM176,88a12,12,0,0,0-12-12H44a12,12,0,0,0,0,24H164A12,12,0,0,0,176,88Zm0,44a12,12,0,0,0-12-12H76a12,12,0,0,0,0,24h88A12,12,0,0,0,176,132Zm-4,32H132a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Zm-32,44H124a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"/></svg>`;
}
