export const iconPhLightPaintBrushBroad = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,26H72A38,38,0,0,0,34,64v72a22,22,0,0,0,22,22h48a2,2,0,0,1,2,2.23L98.08,207a6.74,6.74,0,0,0-.08,1,30,30,0,0,0,60,0,6.74,6.74,0,0,0-.08-1L150,160.23a2,2,0,0,1,2-2.23h48a22,22,0,0,0,22-22V32A6,6,0,0,0,216,26ZM72,38H178V80a6,6,0,0,0,12,0V38h20v68H46V64A26,26,0,0,1,72,38ZM200,146H152a14,14,0,0,0-13.86,16l0,.15L146,208.47a18,18,0,0,1-36,0l7.82-46.34,0-.15A14,14,0,0,0,104,146H56a10,10,0,0,1-10-10V118H210v18A10,10,0,0,1,200,146Z"/></svg>`;
}
