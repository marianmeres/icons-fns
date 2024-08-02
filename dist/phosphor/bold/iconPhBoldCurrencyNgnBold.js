export const iconPhBoldCurrencyNgnBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,116H204V46a12,12,0,0,0-24,0v70H133.86L73.46,38.62A12,12,0,0,0,52,46v70H40a12,12,0,0,0,0,24H52v70a12,12,0,0,0,24,0V140h46.14l60.4,77.38A12,12,0,0,0,204,210V140h12a12,12,0,0,0,0-24ZM76,116V80.88L103.41,116Zm104,59.12L152.59,140H180Z"/></svg>`;
}
