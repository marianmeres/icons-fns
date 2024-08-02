export const iconPhLightChartDonut = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26a6,6,0,0,0-6,6V88a6,6,0,0,0,6,6,34,34,0,1,1-29.45,17,6,6,0,0,0-2.2-8.2l-48.5-28A6,6,0,0,0,39.65,77,102,102,0,1,0,128,26ZM47.21,88.29l38.29,22.1A46,46,0,0,0,82,128a47.64,47.64,0,0,0,.4,6L39.7,145.45a90.27,90.27,0,0,1,7.51-57.16ZM42.81,157l42.7-11.44a46.12,46.12,0,0,0,36.49,28v44.2A90.2,90.2,0,0,1,42.81,157ZM134,217.8V173.6a46,46,0,0,0,0-91.21V38.2a90,90,0,0,1,0,179.6Z"/></svg>`;
}
