export const iconPhThinMathOperations = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M108,72a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8h64A4,4,0,0,1,108,72Zm-4,108H76V152a4,4,0,0,0-8,0v28H40a4,4,0,0,0,0,8H68v28a4,4,0,0,0,8,0V188h28a4,4,0,0,0,0-8Zm48-8h64a4,4,0,0,0,0-8H152a4,4,0,0,0,0,8Zm64,24H152a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8ZM157.17,98.83a4,4,0,0,0,5.66,0L184,77.66l21.17,21.17a4,4,0,1,0,5.66-5.66L189.66,72l21.17-21.17a4,4,0,1,0-5.66-5.66L184,66.34,162.83,45.17a4,4,0,0,0-5.66,5.66L178.34,72,157.17,93.17A4,4,0,0,0,157.17,98.83Z"/></svg>`;
}
