export const iconPhLightTagSimple = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M245,124.67,199.37,56.23A14,14,0,0,0,187.72,50H40A14,14,0,0,0,26,64V192a14,14,0,0,0,14,14H187.72a14,14,0,0,0,11.65-6.23L245,131.33A6,6,0,0,0,245,124.67Zm-55.61,68.44a2,2,0,0,1-1.66.89H40a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H187.72a2,2,0,0,1,1.66.89L232.79,128Z"/></svg>`;
}
