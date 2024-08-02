export const iconPhLightGradient = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M26,104a6,6,0,0,1,6-6h80a6,6,0,0,1,0,12H32A6,6,0,0,1,26,104Zm198-6H144a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12ZM72,138H32a6,6,0,0,0,0,12H72a6,6,0,0,0,0-12Zm152,0H184a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12ZM98,144a6,6,0,0,0,6,6h48a6,6,0,0,0,0-12H104A6,6,0,0,0,98,144ZM56,178H32a6,6,0,0,0,0,12H56a6,6,0,0,0,0-12Zm56,0H88a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Zm56,0H144a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Zm56,0H200a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12ZM32,70H224a6,6,0,0,0,0-12H32a6,6,0,0,0,0,12Z"/></svg>`;
}
