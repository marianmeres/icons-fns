export const iconPhBoldListMagnifyingGlass = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,76h64a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm80,40H40a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24Zm120.49,20.49a12,12,0,0,1-17,0l-18.08-18.08a44,44,0,1,1,17-17l18.08,18.07A12,12,0,0,1,240.49,200.49ZM184,164a20,20,0,1,0-20-20A20,20,0,0,0,184,164Z"/></svg>`;
}
