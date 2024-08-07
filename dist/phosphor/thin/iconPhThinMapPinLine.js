export const iconPhThinMapPinLine = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,228H139.72A263.66,263.66,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62a84,84,0,0,0-168,0c0,30.42,14.17,62.79,41,93.62A263.66,263.66,0,0,0,116.28,228H56a4,4,0,0,0,0,8H200a4,4,0,0,0,0-8ZM90.9,192.23C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0c0,35.9-21.15,67.8-38.9,88.23A254.62,254.62,0,0,1,128,227,254.62,254.62,0,0,1,90.9,192.23ZM164,104a36,36,0,1,0-36,36A36,36,0,0,0,164,104Zm-64,0a28,28,0,1,1,28,28A28,28,0,0,1,100,104Z"/></svg>`;
}
