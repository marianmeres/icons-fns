export const iconPhLightMapPinSimpleLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M182,72a54,54,0,1,0-60,53.66V232a6,6,0,0,0,12,0V125.66A54.07,54.07,0,0,0,182,72Zm-54,42a42,42,0,1,1,42-42A42,42,0,0,1,128,114Z"/></svg>`;
}
