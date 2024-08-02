export const iconPhLightPushPinSimpleLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,170H205L183.15,46H192a6,6,0,0,0,0-12H64a6,6,0,0,0,0,12h8.85L51,170H40a6,6,0,0,0,0,12h82v58a6,6,0,0,0,12,0V182h82a6,6,0,0,0,0-12ZM85,46H171l21.88,124H63.15Z"/></svg>`;
}
