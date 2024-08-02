export const iconPhFillAirplaneTakeoffFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,216a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H168A8,8,0,0,1,176,216ZM246.31,86.76,227.67,62.87l-.12-.15a39.82,39.82,0,0,0-51.28-9.12L124.7,84.38,70.76,64.54a8,8,0,0,0-5.59,0L58,67.27l-.32.13a16,16,0,0,0-4.53,26.47L75,115.06l-20.17,12.2-28.26-9.54a8,8,0,0,0-6.08.4l-3,1.47A16,16,0,0,0,13,145.8l36,35.27.12.12a39.78,39.78,0,0,0,27.28,10.87,40.18,40.18,0,0,0,20.26-5.52l147.41-88a8,8,0,0,0,2.21-11.78Z"/></svg>`;
}
