export const iconPhBoldFinnTheHuman = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M160,96H96a52,52,0,0,0,0,104h64a52,52,0,0,0,0-104Zm0,80H96a28,28,0,0,1,0-56h64a28,28,0,0,1,0,56Zm-48-28a16,16,0,1,1-16-16A16,16,0,0,1,112,148Zm64,0a16,16,0,1,1-16-16A16,16,0,0,1,176,148ZM212,36a36,36,0,0,0-33.94,24H77.94A36,36,0,0,0,8,72v76a88.1,88.1,0,0,0,88,88h64a88.1,88.1,0,0,0,88-88V72A36,36,0,0,0,212,36Zm12,112a64.07,64.07,0,0,1-64,64H96a64.07,64.07,0,0,1-64-64V72a12,12,0,0,1,24,0A12,12,0,0,0,68,84H188a12,12,0,0,0,12-12,12,12,0,0,1,24,0Z"/></svg>`;
}
