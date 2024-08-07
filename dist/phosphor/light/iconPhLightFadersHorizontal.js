export const iconPhLightFadersHorizontal = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M178,80a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H184A6,6,0,0,1,178,80ZM40,86H146v18a6,6,0,0,0,12,0V56a6,6,0,0,0-12,0V74H40a6,6,0,0,0,0,12Zm176,84H120a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12ZM88,146a6,6,0,0,0-6,6v18H40a6,6,0,0,0,0,12H82v18a6,6,0,0,0,12,0V152A6,6,0,0,0,88,146Z"/></svg>`;
}
