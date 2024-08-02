export const iconPhLightSmileyXEyes = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm60.24-117.76L176.49,112l11.75,11.76a6,6,0,1,1-8.48,8.48L168,120.49l-11.76,11.75a6,6,0,0,1-8.48-8.48L159.51,112l-11.75-11.76a6,6,0,0,1,8.48-8.48L168,103.51l11.76-11.75a6,6,0,0,1,8.48,8.48Zm-80,0L96.49,112l11.75,11.76a6,6,0,1,1-8.48,8.48L88,120.49,76.24,132.24a6,6,0,0,1-8.48-8.48L79.51,112,67.76,100.24a6,6,0,0,1,8.48-8.48L88,103.51,99.76,91.76a6,6,0,0,1,8.48,8.48ZM138,180a10,10,0,1,1-10-10A10,10,0,0,1,138,180Z"/></svg>`;
}
