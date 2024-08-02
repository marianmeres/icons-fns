export const iconPhLightArrowElbowRightLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M238,80v72a6,6,0,0,1-12,0V94.48L124.24,196.24a6,6,0,0,1-8.48,0l-96-96a6,6,0,0,1,8.48-8.48L120,183.51,217.52,86H160a6,6,0,0,1,0-12h72A6,6,0,0,1,238,80Z"/></svg>`;
}
