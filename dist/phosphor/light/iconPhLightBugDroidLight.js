export const iconPhLightBugDroidLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M189,51.47l15.22-15.23a6,6,0,1,0-8.48-8.48L180,43.54A85.76,85.76,0,0,0,76,43.54L60.24,27.76a6,6,0,0,0-8.48,8.48L67,51.47A85.7,85.7,0,0,0,42,112v40a86,86,0,0,0,172,0V112A85.7,85.7,0,0,0,189,51.47ZM128,38a74.09,74.09,0,0,1,74,74v10H54V112A74.09,74.09,0,0,1,128,38Zm0,188a74.09,74.09,0,0,1-74-74V134H202v18A74.09,74.09,0,0,1,128,226ZM146,92a10,10,0,1,1,10,10A10,10,0,0,1,146,92ZM90,92a10,10,0,1,1,10,10A10,10,0,0,1,90,92Z"/></svg>`;
}
