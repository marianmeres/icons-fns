export const iconPhLightArrowLineRightLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M188.24,123.76a6,6,0,0,1,0,8.48l-72,72a6,6,0,0,1-8.48-8.48L169.51,134H32a6,6,0,0,1,0-12H169.51L107.76,60.24a6,6,0,0,1,8.48-8.48ZM216,34a6,6,0,0,0-6,6V216a6,6,0,0,0,12,0V40A6,6,0,0,0,216,34Z"/></svg>`;
}
