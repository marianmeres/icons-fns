export const iconPhLightPasswordLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M46,56V200a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0Zm94.58,56.41L118,119.74V96a6,6,0,0,0-12,0v23.74l-22.58-7.33a6,6,0,1,0-3.71,11.41l22.58,7.33-14,19.21a6,6,0,1,0,9.7,7.06l14-19.21,14,19.21a6,6,0,0,0,9.7-7.06l-14-19.21,22.58-7.33a6,6,0,1,0-3.71-11.41Zm103.56,3.85a6,6,0,0,0-7.56-3.85L214,119.74V96a6,6,0,0,0-12,0v23.74l-22.58-7.33a6,6,0,1,0-3.71,11.41l22.58,7.33-13.95,19.21a6,6,0,1,0,9.7,7.06l14-19.21,14,19.21a6,6,0,0,0,9.7-7.06l-13.95-19.21,22.58-7.33A6,6,0,0,0,244.14,116.26Z"/></svg>`;
}
