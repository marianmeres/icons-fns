export const iconPhLightFileX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM202,216a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50Zm-45.76-92.24a6,6,0,0,1,0,8.48L136.49,152l19.75,19.76a6,6,0,1,1-8.48,8.48L128,160.49l-19.76,19.75a6,6,0,0,1-8.48-8.48L119.51,152,99.76,132.24a6,6,0,1,1,8.48-8.48L128,143.51l19.76-19.75A6,6,0,0,1,156.24,123.76Z"/></svg>`;
}
