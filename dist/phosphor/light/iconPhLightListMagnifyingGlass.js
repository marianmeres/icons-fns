export const iconPhLightListMagnifyingGlass = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,70h72a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm88,52H40a6,6,0,0,0,0,12h88a6,6,0,0,0,0-12Zm108.24,10.24a6,6,0,0,1-8.48,0l-21.49-21.48a38.06,38.06,0,1,1,8.49-8.49l21.48,21.49A6,6,0,0,1,236.24,196.24ZM184,170a26,26,0,1,0-26-26A26,26,0,0,0,184,170Z"/></svg>`;
}
