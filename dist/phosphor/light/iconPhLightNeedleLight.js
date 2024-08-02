export const iconPhLightNeedleLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M188.24,67.76a6,6,0,0,1,0,8.48l-16,16a6,6,0,0,1-8.48-8.48l16-16A6,6,0,0,1,188.24,67.76ZM222,72a37.74,37.74,0,0,1-11.13,26.87l-24,24a6,6,0,0,1-3.23,1.67c-52.14,9-138.53,94.84-139.4,95.7a5.81,5.81,0,0,1-1.82,1.25h0A6.12,6.12,0,0,1,40,222a6,6,0,0,1-4.24-10.24h0c1.4-1.41,86.78-87.44,95.69-139.39a6,6,0,0,1,1.67-3.23l24-24A38,38,0,0,1,222,72Zm-12,0a26,26,0,0,0-44.38-18.38L142.93,76.3c-4.14,20.79-18.62,47.61-43.13,79.9,32.29-24.51,59.11-39,79.9-43.13l22.68-22.69A25.79,25.79,0,0,0,210,72Z"/></svg>`;
}
