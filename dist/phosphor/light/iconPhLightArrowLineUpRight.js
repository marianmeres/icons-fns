export const iconPhLightArrowLineUpRight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M222,216a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216ZM80,174a6,6,0,0,0,4.24-1.76L186,70.49V152a6,6,0,0,0,12,0V56a6,6,0,0,0-6-6H96a6,6,0,0,0,0,12h81.51L75.76,163.76A6,6,0,0,0,80,174Z"/></svg>`;
}
