export const iconPhThinCurrencyRubThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M148,36H88a4,4,0,0,0-4,4V140H56a4,4,0,0,0,0,8H84v24H56a4,4,0,0,0,0,8H84v36a4,4,0,0,0,8,0V180h52a4,4,0,0,0,0-8H92V148h56a56,56,0,0,0,0-112Zm0,104H92V44h56a48,48,0,0,1,0,96Z"/></svg>`;
}
