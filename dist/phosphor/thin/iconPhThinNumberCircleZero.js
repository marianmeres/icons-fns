export const iconPhThinNumberCircleZero = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm0-144c-12.82,0-23.41,5.81-30.62,16.8C91.33,102,88,114.52,88,128s3.33,26,9.38,35.2c7.21,11,17.8,16.8,30.62,16.8s23.41-5.81,30.62-16.8c6-9.22,9.38-21.72,9.38-35.2s-3.33-26-9.38-35.19C151.41,81.81,140.82,76,128,76Zm0,96c-22.11,0-32-22.1-32-44s9.89-44,32-44,32,22.1,32,44S150.11,172,128,172Z"/></svg>`;
}
