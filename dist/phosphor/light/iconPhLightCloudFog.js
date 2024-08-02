export const iconPhLightCloudFog = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M120,206H72a6,6,0,0,1,0-12h48a6,6,0,0,1,0,12Zm64-12H160a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Zm-24,32H104a6,6,0,0,0,0,12h56a6,6,0,0,0,0-12Zm70-126a74.09,74.09,0,0,1-74,74H76A50,50,0,1,1,86.2,75,74.08,74.08,0,0,1,230,100Zm-12,0A62.06,62.06,0,0,0,94,96.35a6,6,0,0,1-12-.7,75.84,75.84,0,0,1,1.07-9A38,38,0,1,0,76,162h80A62.07,62.07,0,0,0,218,100Z"/></svg>`;
}
