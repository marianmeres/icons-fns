export const iconPhBoldBracketsSquareBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M52,52V204H80a12,12,0,0,1,0,24H40a12,12,0,0,1-12-12V40A12,12,0,0,1,40,28H80a12,12,0,0,1,0,24ZM216,28H176a12,12,0,0,0,0,24h28V204H176a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Z"/></svg>`;
}
