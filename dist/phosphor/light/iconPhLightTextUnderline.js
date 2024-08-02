export const iconPhLightTextUnderline = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M198,224a6,6,0,0,1-6,6H64a6,6,0,0,1,0-12H192A6,6,0,0,1,198,224Zm-70-26a62.07,62.07,0,0,0,62-62V56a6,6,0,0,0-12,0v80a50,50,0,0,1-100,0V56a6,6,0,0,0-12,0v80A62.07,62.07,0,0,0,128,198Z"/></svg>`;
}
