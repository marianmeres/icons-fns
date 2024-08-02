export const iconPhLightShovel = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244.24,59.76l-48-48a6,6,0,0,0-8.48,8.48L207.52,40l-73.86,73.86L97.9,78.1a14,14,0,0,0-19.8,0l-56,56A13.94,13.94,0,0,0,18,144v80a14,14,0,0,0,14,14h80a13.94,13.94,0,0,0,9.9-4.1l56-56a14,14,0,0,0,0-19.8l-35.76-35.76L216,48.48l19.76,19.76a6,6,0,1,0,8.48-8.48ZM169.41,166.58a2,2,0,0,1,0,2.84l-56,56A2,2,0,0,1,112,226H32a2,2,0,0,1-2-2V144a2,2,0,0,1,.58-1.42l56-56A2,2,0,0,1,88,86a2.07,2.07,0,0,1,1.42.58l35.75,35.76L83.76,163.76a6,6,0,1,0,8.48,8.48l41.42-41.41Z"/></svg>`;
}
