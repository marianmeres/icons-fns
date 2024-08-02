export const iconPhLightArrowDownLeftLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M196.24,68.24,78.48,186H168a6,6,0,0,1,0,12H64a6,6,0,0,1-6-6V88a6,6,0,0,1,12,0v89.52L187.76,59.76a6,6,0,0,1,8.48,8.48Z"/></svg>`;
}
