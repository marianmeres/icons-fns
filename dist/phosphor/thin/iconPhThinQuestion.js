export const iconPhThinQuestion = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M136,180a8,8,0,1,1-8-8A8,8,0,0,1,136,180ZM128,76c-19.85,0-36,14.36-36,32v4a4,4,0,0,0,8,0v-4c0-13.23,12.56-24,28-24s28,10.77,28,24-12.56,24-28,24a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-4.2c18-1.77,32-15.36,32-31.8C164,90.36,147.85,76,128,76Zm100,52A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"/></svg>`;
}
