export const iconPhFillQueue = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM64,72H192a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm40,112H64a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm92.44,22.66-48,32A8,8,0,0,1,144,192a8,8,0,0,1-8-8V120a8,8,0,0,1,12.44-6.66l48,32a8,8,0,0,1,0,13.32Z"/></svg>`;
}
