export const iconPhLightPower = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M122,128V48a6,6,0,0,1,12,0v80a6,6,0,0,1-12,0Zm57.28-77A6,6,0,0,0,172.72,61C196.41,76.47,210,100.88,210,128a82,82,0,0,1-164,0c0-27.12,13.59-51.53,37.28-67A6,6,0,0,0,76.72,51C49.57,68.68,34,96.75,34,128a94,94,0,0,0,188,0C222,96.75,206.43,68.68,179.28,51Z"/></svg>`;
}
