export const iconPhLightTeaBag = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,162a18,18,0,0,1-18-18V64A54,54,0,0,0,98,64V74H76.53a14.07,14.07,0,0,0-12,6.8L44,115a14,14,0,0,0-2,7.21V216a14,14,0,0,0,14,14h96a14,14,0,0,0,14-14V122.22a14,14,0,0,0-2-7.21L143.48,80.8a14.07,14.07,0,0,0-12-6.8H110V64a42,42,0,0,1,84,0v80a30,30,0,0,0,30,30,6,6,0,0,0,0-12ZM131.47,86a2,2,0,0,1,1.72,1l20.53,34.22a2,2,0,0,1,.28,1V216a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V122.22a2,2,0,0,1,.29-1L74.81,87a2,2,0,0,1,1.72-1H98v50a6,6,0,0,0,12,0V86Z"/></svg>`;
}
