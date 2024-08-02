export const iconPhThinNotEquals = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,160a4,4,0,0,1-4,4H100.68L51,218.69A4,4,0,0,1,45,213.31L89.87,164H40a4,4,0,0,1,0-8H97.14l50.91-56H40a4,4,0,0,1,0-8H155.32L205,37.31A4,4,0,0,1,211,42.69L166.13,92H216a4,4,0,0,1,0,8H158.86L108,156H216A4,4,0,0,1,220,160Z"/></svg>`;
}
