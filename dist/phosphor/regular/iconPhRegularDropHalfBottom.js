export const iconPhRegularDropHalfBottom = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM187.83,184H68.17a72,72,0,0,1-8-16H195.87A72,72,0,0,1,187.83,184ZM200,144a70.57,70.57,0,0,1-.46,8H56.46a70.57,70.57,0,0,1-.46-8q0-4,.36-8H199.64Q200,140,200,144ZM128,26c14.16,11.1,56.86,47.74,68.84,94H59.16C71.14,73.76,113.84,37.12,128,26ZM82.81,200h90.38a71.82,71.82,0,0,1-90.38,0Z"/></svg>`;
}
