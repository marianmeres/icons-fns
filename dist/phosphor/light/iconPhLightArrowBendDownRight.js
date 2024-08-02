export const iconPhLightArrowBendDownRight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228.24,156.24l-48,48a6,6,0,0,1-8.48-8.48L209.51,158H128A102.12,102.12,0,0,1,26,56a6,6,0,0,1,12,0,90.1,90.1,0,0,0,90,90h81.51l-37.75-37.76a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,228.24,156.24Z"/></svg>`;
}
