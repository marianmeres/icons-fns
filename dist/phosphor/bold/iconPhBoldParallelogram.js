export const iconPhBoldParallelogram = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248.78,45.14A19.92,19.92,0,0,0,232,36H88.81A20,20,0,0,0,70.57,47.79l-64.8,144A20,20,0,0,0,24,220H167.19a20,20,0,0,0,18.24-11.79l64.8-144A19.9,19.9,0,0,0,248.78,45.14ZM164.6,196H30.2L91.4,60H225.8Z"/></svg>`;
}
