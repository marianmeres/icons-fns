export const iconPhLightBathtub = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,98H206V96a6,6,0,0,0-6-6H136a6,6,0,0,0-6,6v2H62V52A14,14,0,0,1,76,38,14.47,14.47,0,0,1,90.12,49.19a6,6,0,1,0,11.76-2.38A26.32,26.32,0,0,0,76,26,26,26,0,0,0,50,52V98H16a6,6,0,0,0-6,6v40a54.06,54.06,0,0,0,54,54h2v18a6,6,0,0,0,12,0V198H178v18a6,6,0,0,0,12,0V198h2a54.06,54.06,0,0,0,54-54V104A6,6,0,0,0,240,98Zm-98,4h52v36H142Zm92,42a42,42,0,0,1-42,42H64a42,42,0,0,1-42-42V110H130v34a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V110h28Z"/></svg>`;
}
