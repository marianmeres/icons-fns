export const iconPhLightMapPinSimpleLineLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,210H134V133.66a54,54,0,1,0-12,0V210H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12ZM86,80a42,42,0,1,1,42,42A42,42,0,0,1,86,80Z"/></svg>`;
}
