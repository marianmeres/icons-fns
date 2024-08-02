export const iconPhLightCloudSnow = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M86,196a10,10,0,1,1-10-10A10,10,0,0,1,86,196Zm30,6a10,10,0,1,0,10,10A10,10,0,0,0,116,202Zm48-16a10,10,0,1,0,10,10A10,10,0,0,0,164,186ZM68,226a10,10,0,1,0,10,10A10,10,0,0,0,68,226Zm88,0a10,10,0,1,0,10,10A10,10,0,0,0,156,226ZM230,92a74.09,74.09,0,0,1-74,74H76A50,50,0,1,1,86.2,67,74.08,74.08,0,0,1,230,92Zm-12,0A62.06,62.06,0,0,0,94,88.35a6,6,0,0,1-12-.7,75.84,75.84,0,0,1,1.07-9A38,38,0,1,0,76,154h80A62.07,62.07,0,0,0,218,92Z"/></svg>`;
}
