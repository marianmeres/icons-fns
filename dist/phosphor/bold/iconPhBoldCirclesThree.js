export const iconPhBoldCirclesThree = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,76a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,76Zm-48,24a24,24,0,1,1,24-24A24,24,0,0,1,128,100Zm60,24a48,48,0,1,0,48,48A48.05,48.05,0,0,0,188,124Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,188,196ZM68,124a48,48,0,1,0,48,48A48.05,48.05,0,0,0,68,124Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,68,196Z"/></svg>`;
}
