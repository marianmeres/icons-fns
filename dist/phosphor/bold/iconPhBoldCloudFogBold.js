export const iconPhBoldCloudFogBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M120,208H72a12,12,0,0,1,0-24h48a12,12,0,0,1,0,24Zm64-24H160a12,12,0,0,0,0,24h24a12,12,0,0,0,0-24Zm-24,36H104a12,12,0,0,0,0,24h56a12,12,0,0,0,0-24ZM232,96a76.08,76.08,0,0,1-76,76H76A52,52,0,1,1,85,68.78,76,76,0,0,1,232,96Zm-24,0a52,52,0,0,0-104,0,12,12,0,0,1-24,0c0-1.24,0-2.48.09-3.71A29.28,29.28,0,0,0,76,92a28,28,0,0,0,0,56h80A52.06,52.06,0,0,0,208,96Z"/></svg>`;
}
