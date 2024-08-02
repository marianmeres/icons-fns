export const iconPhLightSpadeLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M179.84,51.39a284.14,284.14,0,0,0-49.16-32.76,6,6,0,0,0-5.36,0A284.14,284.14,0,0,0,76.16,51.39C42.88,79.13,26,107.59,26,136a54,54,0,0,0,75.24,49.65l-11,36.63A6,6,0,0,0,96,230h64a6,6,0,0,0,5.75-7.72l-11-36.63A54,54,0,0,0,230,136C230,107.59,213.12,79.13,179.84,51.39ZM176,178a42,42,0,0,1-27.6-10.34,6,6,0,0,0-9.69,6.24L151.94,218H104.06l13.23-44.1a6,6,0,0,0-9.69-6.24A42,42,0,0,1,38,136c0-53.73,74.77-97,90-105.22C143.24,39,218,82.2,218,136A42,42,0,0,1,176,178Z"/></svg>`;
}
