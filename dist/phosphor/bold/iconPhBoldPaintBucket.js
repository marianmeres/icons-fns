export const iconPhBoldPaintBucket = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M235.79,142.88a12,12,0,0,0,4.7-19.87L125,7.52a12,12,0,0,0-17,0L70.25,45.29,48.48,23.52a12,12,0,0,0-17,17L53.28,62.26,12.2,103.35a28,28,0,0,0,0,39.6l84.86,84.86a28,28,0,0,0,39.6,0L214.48,150Zm-31.58-14.77a12,12,0,0,0-4.7,2.9l-79.82,79.83a4,4,0,0,1-5.66,0L29.17,126a4,4,0,0,1,0-5.66L70.25,79.24l24.29,24.29a32,32,0,0,0,52.09,35.11h0a32,32,0,0,0-35.12-52.08L87.23,62.26,116.52,33l93.27,93.28Zm-85.87-17.75,0,0a8,8,0,1,1-.06.06ZM256,208a24,24,0,0,1-48,0c0-19.44,12.93-37.23,14.4-39.2a12,12,0,0,1,19.2,0C243.07,170.78,256,188.57,256,208Z"/></svg>`;
}
