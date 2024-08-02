export const iconPhThinArrowUDownRight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M226.83,170.83l-48,48a4,4,0,0,1-5.66-5.66L214.34,172H88A60,60,0,0,1,88,52h88a4,4,0,0,1,0,8H88a52,52,0,0,0,0,104H214.34l-41.17-41.17a4,4,0,0,1,5.66-5.66l48,48A4,4,0,0,1,226.83,170.83Z"/></svg>`;
}
