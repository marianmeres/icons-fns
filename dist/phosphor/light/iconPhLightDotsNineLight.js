export const iconPhLightDotsNineLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M70,60A10,10,0,1,1,60,50,10,10,0,0,1,70,60Zm58-10a10,10,0,1,0,10,10A10,10,0,0,0,128,50Zm68,20a10,10,0,1,0-10-10A10,10,0,0,0,196,70ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,128,118Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118ZM60,186a10,10,0,1,0,10,10A10,10,0,0,0,60,186Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,128,186Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,196,186Z"/></svg>`;
}
