export const iconPhBoldFireBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M177.62,159.6a52,52,0,0,1-34,34,12.2,12.2,0,0,1-3.6.55,12,12,0,0,1-3.6-23.45,28,28,0,0,0,18.32-18.32,12,12,0,0,1,22.9,7.2ZM220,144a92,92,0,0,1-184,0c0-28.81,11.27-58.18,33.48-87.28a12,12,0,0,1,17.9-1.33L107.07,74.5,127,19.89a12,12,0,0,1,18.94-5.12C168.2,33.25,220,82.85,220,144Zm-24,0c0-41.71-30.61-78.39-52.52-99.29l-20.21,55.4a12,12,0,0,1-19.63,4.5L80.71,82.36C67,103.38,60,124.06,60,144a68,68,0,0,0,136,0Z"/></svg>`;
}
