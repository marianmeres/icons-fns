export const iconPhBoldMatrixLogoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M76,216a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V40A12,12,0,0,1,40,28H64a12,12,0,0,1,0,24H52V204H64A12,12,0,0,1,76,216ZM216,28H192a12,12,0,0,0,0,24h12V204H192a12,12,0,0,0,0,24h24a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM188,160V120a36,36,0,0,0-60-26.8,35.91,35.91,0,0,0-39.51-5.68A12,12,0,0,0,68,96v64a12,12,0,0,0,24,0V120a12,12,0,0,1,24,0v40a12,12,0,0,0,24,0V120a12,12,0,0,1,24,0v40a12,12,0,0,0,24,0Z"/></svg>`;
}
