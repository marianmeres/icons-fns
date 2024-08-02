export const iconPhLightSkipBackLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M198.84,35.77a14,14,0,0,0-14.21.37L62,112.83V40a6,6,0,0,0-12,0V216a6,6,0,0,0,12,0V143.16l122.63,76.7a14,14,0,0,0,14.21.37A13.69,13.69,0,0,0,206,208.12V47.88A13.69,13.69,0,0,0,198.84,35.77ZM194,208.12a1.79,1.79,0,0,1-1,1.62,2,2,0,0,1-2-.05L62.88,129.56a1.82,1.82,0,0,1,0-3.12L191,46.31a2,2,0,0,1,1-.31,2.1,2.1,0,0,1,1,.26,1.79,1.79,0,0,1,1,1.62Z"/></svg>`;
}
