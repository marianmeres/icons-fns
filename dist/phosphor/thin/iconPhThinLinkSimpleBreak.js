export const iconPhThinLinkSimpleBreak = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212.79,116.77l-30.07,30.06a4,4,0,1,1-5.66-5.66l30.07-30.06a44,44,0,0,0-62.24-62.24L114.82,78.93a4,4,0,0,1-5.65-5.66l30.06-30.06a52,52,0,0,1,73.56,73.56Zm-71.62,60.29-30.06,30.07a44,44,0,0,1-62.24-62.24l30.06-30.06a4,4,0,0,0-5.66-5.66L43.21,139.23a52,52,0,0,0,73.56,73.56l30.06-30.07a4,4,0,1,0-5.66-5.66Z"/></svg>`;
}
