export const iconPhThinCloudRain = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M155.33,194.22l-32,48a4,4,0,1,1-6.66-4.44l32-48a4,4,0,0,1,6.66,4.44ZM228,92a72.08,72.08,0,0,1-72,72H130.14L99.33,210.22a4,4,0,1,1-6.66-4.44L120.53,164H76A48,48,0,1,1,87.51,69.39,72.08,72.08,0,0,1,228,92Zm-8,0A64.06,64.06,0,0,0,92,88.23a4,4,0,0,1-8-.46,71.63,71.63,0,0,1,1.42-10.65A40,40,0,1,0,76,156h80A64.07,64.07,0,0,0,220,92Z"/></svg>`;
}
