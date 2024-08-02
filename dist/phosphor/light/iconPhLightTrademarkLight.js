export const iconPhLightTrademarkLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM110,104a6,6,0,0,1-6,6H94v42a6,6,0,0,1-12,0V110H72a6,6,0,0,1,0-12h32A6,6,0,0,1,110,104Zm80,0v48a6,6,0,0,1-12,0V120l-17.48,20a6,6,0,0,1-9,0L134,120v32a6,6,0,0,1-12,0V104a6,6,0,0,1,10.52-4L156,126.89l23.48-26.84A6,6,0,0,1,190,104Z"/></svg>`;
}
