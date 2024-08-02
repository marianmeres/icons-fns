export const iconPhLightHashStraightLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,154H166V102h50a6,6,0,0,0,0-12H166V40a6,6,0,0,0-12,0V90H102V40a6,6,0,0,0-12,0V90H40a6,6,0,0,0,0,12H90v52H40a6,6,0,0,0,0,12H90v50a6,6,0,0,0,12,0V166h52v50a6,6,0,0,0,12,0V166h50a6,6,0,0,0,0-12Zm-114,0V102h52v52Z"/></svg>`;
}
