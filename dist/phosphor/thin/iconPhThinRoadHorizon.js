export const iconPhThinRoadHorizon = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M235.49,190a4,4,0,0,1-1.53,5.45,4.07,4.07,0,0,1-2,.51,4,4,0,0,1-3.49-2L157.66,68H132V80a4,4,0,0,1-8,0V68H98.34L27.49,194A4,4,0,0,1,24,196a4.07,4.07,0,0,1-2-.51A4,4,0,0,1,20.51,190L89.16,68H24a4,4,0,0,1,0-8H232a4,4,0,0,1,0,8H166.84ZM128,116a4,4,0,0,0-4,4v16a4,4,0,0,0,8,0V120A4,4,0,0,0,128,116Zm0,56a4,4,0,0,0-4,4v16a4,4,0,0,0,8,0V176A4,4,0,0,0,128,172Z"/></svg>`;
}
