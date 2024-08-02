export const iconPhBoldUserCheck = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M152.5,156.54a72,72,0,1,0-89,0,124,124,0,0,0-48.69,35.74,12,12,0,0,0,18.38,15.44C46.88,191.42,71,172,108,172s61.12,19.42,74.81,35.72a12,12,0,1,0,18.38-15.44A123.89,123.89,0,0,0,152.5,156.54ZM60,100a48,48,0,1,1,48,48A48.05,48.05,0,0,1,60,100Zm192.49,36.49-32,32a12,12,0,0,1-17,0l-16-16a12,12,0,0,1,17-17L212,143l23.51-23.52a12,12,0,1,1,17,17Z"/></svg>`;
}
