export const iconPhFillListDashesFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,184H64a8,8,0,0,1,0-16h8a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16h8a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16h8a8,8,0,0,1,0,16Zm120,96H104a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16Zm0-48H104a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16Zm0-48H104a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16Z"/></svg>`;
}
