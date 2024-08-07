export const iconPhThinGradient = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M28,104a4,4,0,0,1,4-4h80a4,4,0,0,1,0,8H32A4,4,0,0,1,28,104Zm196-4H144a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8ZM72,140H32a4,4,0,0,0,0,8H72a4,4,0,0,0,0-8Zm152,0H184a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8Zm-124,4a4,4,0,0,0,4,4h48a4,4,0,0,0,0-8H104A4,4,0,0,0,100,144ZM56,180H32a4,4,0,0,0,0,8H56a4,4,0,0,0,0-8Zm56,0H88a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Zm56,0H144a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Zm56,0H200a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8ZM32,68H224a4,4,0,0,0,0-8H32a4,4,0,0,0,0,8Z"/></svg>`;
}
