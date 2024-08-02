export const iconPhLightCouch = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M238,107.37V72a14,14,0,0,0-14-14H32A14,14,0,0,0,18,72v35.37A14,14,0,0,0,10,120v48a14,14,0,0,0,14,14H34v18a6,6,0,0,0,12,0V182H210v18a6,6,0,0,0,12,0V182h10a14,14,0,0,0,14-14V120A14,14,0,0,0,238,107.37ZM226,72v34H216a14,14,0,0,0-14,14v18H134V70h90A2,2,0,0,1,226,72ZM32,70h90v68H54V120a14,14,0,0,0-14-14H30V72A2,2,0,0,1,32,70Zm202,98a2,2,0,0,1-2,2H24a2,2,0,0,1-2-2V120a2,2,0,0,1,2-2H40a2,2,0,0,1,2,2v24a6,6,0,0,0,6,6H208a6,6,0,0,0,6-6V120a2,2,0,0,1,2-2h16a2,2,0,0,1,2,2Z"/></svg>`;
}
