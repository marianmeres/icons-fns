export const iconPhThinIceCream = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204,100.4V96A76,76,0,0,0,52,96v4.4A20,20,0,0,0,56,140h5.61l56,97.95a12,12,0,0,0,20.84,0l56-97.95H200a20,20,0,0,0,4-39.6ZM131.47,234a4,4,0,0,1-6.94,0L70.82,140H99.39l42.9,75.06Zm5.64-94,24,42.06L146.89,207l-38.28-67Zm28.64,34-19.43-34h38.86ZM200,132H56a12,12,0,0,1,0-24,4,4,0,0,0,4-4V96a68,68,0,0,1,136,0v8a4,4,0,0,0,4,4,12,12,0,0,1,0,24Z"/></svg>`;
}
