export const iconPhFillSeatFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,232a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16H216A8,8,0,0,1,224,232Zm-16-88-64.22,0L112,80l14.19-26.32a1.51,1.51,0,0,0,.11-.22A16,16,0,0,0,119.15,32l-.47-.22L85,17.57A16,16,0,0,0,63.8,24.84l-22.12,44a16.1,16.1,0,0,0,0,14.32l58.11,116A15.93,15.93,0,0,0,114.11,208H208a16,16,0,0,0,16-16V160A16,16,0,0,0,208,144Z"/></svg>`;
}
