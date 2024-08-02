export const iconPhBoldStamp = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,224a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,224Zm0-80v32a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V144a20,20,0,0,1,20-20H96L83.55,54.33A36,36,0,0,1,119,12h18a36,36,0,0,1,35.44,42.33L160,124h48A20,20,0,0,1,228,144ZM107.17,50.11,120.37,124h15.26l13.2-73.89A12,12,0,0,0,137,36H119a12,12,0,0,0-11.82,14.11ZM204,148H52v24H204Z"/></svg>`;
}
