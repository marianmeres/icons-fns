export const iconPhRegularArrowLineDownRight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40ZM192,96a8,8,0,0,0-8,8v76.69L85.66,82.34A8,8,0,0,0,74.34,93.66L172.69,192H96a8,8,0,0,0,0,16h96a8,8,0,0,0,8-8V104A8,8,0,0,0,192,96Z"/></svg>`;
}
