export const iconPhThinCloudFog = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M120,204H72a4,4,0,0,1,0-8h48a4,4,0,0,1,0,8Zm64-8H160a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Zm-24,32H104a4,4,0,0,0,0,8h56a4,4,0,0,0,0-8Zm68-128a72.08,72.08,0,0,1-72,72H76A48,48,0,1,1,87.51,77.39,72.08,72.08,0,0,1,228,100Zm-8,0A64.06,64.06,0,0,0,92,96.23a4,4,0,0,1-8-.46,71.63,71.63,0,0,1,1.42-10.65A40,40,0,1,0,76,164h80A64.07,64.07,0,0,0,220,100Z"/></svg>`;
}
