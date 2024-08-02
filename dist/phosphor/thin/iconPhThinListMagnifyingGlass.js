export const iconPhThinListMagnifyingGlass = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,68h72a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm88,56H40a4,4,0,0,0,0,8h88a4,4,0,0,0,0-8Zm106.83,6.83a4,4,0,0,1-5.66,0l-22.72-22.72a36.06,36.06,0,1,1,5.66-5.66l22.72,22.72A4,4,0,0,1,234.83,194.83ZM184,172a28,28,0,1,0-28-28A28,28,0,0,0,184,172Z"/></svg>`;
}
