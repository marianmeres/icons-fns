export const iconPhLightBelt = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,162H190V94h58a6,6,0,0,0,0-12H188.63A14,14,0,0,0,176,74H112a14,14,0,0,0-12.63,8H62V80a6,6,0,0,0-12,0v2H8A6,6,0,0,0,8,94H50v68H8a6,6,0,0,0,0,12H50v2a6,6,0,0,0,12,0v-2H99.37A14,14,0,0,0,112,182h64a14,14,0,0,0,12.63-8H248a6,6,0,0,0,0-12ZM62,94H98v68H62Zm114,76H112a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2h64a2,2,0,0,1,2,2v34H144a6,6,0,0,0,0,12h34v34A2,2,0,0,1,176,170Z"/></svg>`;
}
