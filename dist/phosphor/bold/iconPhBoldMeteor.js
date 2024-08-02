export const iconPhBoldMeteor = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M96,124a36,36,0,1,0,36,36A36,36,0,0,0,96,124Zm0,48a12,12,0,1,1,12-12A12,12,0,0,1,96,172Zm128.49-52.49a12,12,0,0,1,0,17l-48,48a12,12,0,0,1-17-17l48-48A12,12,0,0,1,224.49,119.51Zm-36-20a12,12,0,0,1,0,17l-20,20a12,12,0,0,1-17-17l20-20A12,12,0,0,1,188.49,99.51Zm44-27-16,16a12,12,0,0,1-17-17l16-16a12,12,0,0,1,17,17Zm-113,15,72-72a12,12,0,0,1,17,17l-72,72a12,12,0,1,1-17-17Zm30.23,109.26a12,12,0,0,1,0,17A76,76,0,1,1,42.26,106.26L125,23.51a12,12,0,1,1,17,17L59.23,123.23a52,52,0,0,0,73.54,73.54A12,12,0,0,1,149.74,196.77Z"/></svg>`;
}
