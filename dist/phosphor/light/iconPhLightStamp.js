export const iconPhLightStamp = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M222,224a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,224Zm0-80v40a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V144a14,14,0,0,1,14-14h58.9L90.68,54.29A30,30,0,0,1,120,18h16a30,30,0,0,1,29.33,36.29L149.1,130H208A14,14,0,0,1,222,144ZM119.17,130h17.66l16.76-78.23A18,18,0,0,0,136,30H120a18,18,0,0,0-17.6,21.77ZM210,144a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2v40a2,2,0,0,0,2,2H208a2,2,0,0,0,2-2Z"/></svg>`;
}
