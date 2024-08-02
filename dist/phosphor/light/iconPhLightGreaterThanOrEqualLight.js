export const iconPhLightGreaterThanOrEqualLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M53.93,154.37,190.64,104,53.93,53.63a6,6,0,1,1,4.15-11.26l152,56a6,6,0,0,1,0,11.26l-152,56A6.09,6.09,0,0,1,56,166a6,6,0,0,1-2.07-11.63ZM208,194H56a6,6,0,0,0,0,12H208a6,6,0,0,0,0-12Z"/></svg>`;
}
