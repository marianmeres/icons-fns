export const iconPhBoldCurrencyEthBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M225.44,120.59l-88-112a12,12,0,0,0-18.88,0l-88,112a12,12,0,0,0,0,14.82l.6.76a3.72,3.72,0,0,0,.44.56l87,110.68a12,12,0,0,0,18.88,0l88-112A12,12,0,0,0,225.44,120.59ZM140,50.7l57.12,72.7-57.12,26Zm-24,98.66-57.12-26L116,50.7Zm0,26.37V205.3l-36.15-46Zm24,0,36.15-16.43L140,205.3Z"/></svg>`;
}
