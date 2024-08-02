export const iconPhThinCurrencyNgnThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,140H196V116h20a4,4,0,0,0,0-8H196V46a4,4,0,0,0-8,0v62H117.46L67.15,43.54A4,4,0,0,0,60,46v62H40a4,4,0,0,0,0,8H60v24H40a4,4,0,0,0,0,8H60v62a4,4,0,0,0,8,0V148h70.54l50.31,64.46A4,4,0,0,0,192,214a3.9,3.9,0,0,0,1.3-.22A4,4,0,0,0,196,210V148h20a4,4,0,0,0,0-8Zm-28-24v24H142.44l-18.73-24ZM68,57.63,107.32,108H68ZM68,140V116h45.56l18.73,24Zm120,58.37L148.68,148H188Z"/></svg>`;
}
