export const iconPhThinArrowLineUpRight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,216a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,216ZM80,172a4,4,0,0,0,2.83-1.17L188,65.66V152a4,4,0,0,0,8,0V56a4,4,0,0,0-4-4H96a4,4,0,0,0,0,8h86.34L77.17,165.17A4,4,0,0,0,80,172Z"/></svg>`;
}
