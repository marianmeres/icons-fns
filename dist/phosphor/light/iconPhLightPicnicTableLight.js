export const iconPhLightPicnicTableLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,130H199.71l-30-60H192a6,6,0,0,0,0-12H64a6,6,0,0,0,0,12H86.29l-30,60H8a6,6,0,0,0,0,12H50.29L26.63,189.32a6,6,0,0,0,10.74,5.36L63.71,142H192.29l26.34,52.68a6,6,0,1,0,10.74-5.36L205.71,142H248a6,6,0,0,0,0-12ZM69.71,130l30-60h56.58l30,60Z"/></svg>`;
}
