export const iconPhLightClubLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,90q-2.59,0-5.16.24a54,54,0,1,0-101.69,0C75.45,90.08,73.73,90,72,90A54,54,0,1,0,99.85,190.28l-9.6,32A6,6,0,0,0,96,230h64a6,6,0,0,0,5.75-7.72l-9.6-32A54,54,0,1,0,184,90Zm0,96a41.92,41.92,0,0,1-35.06-18.87,6,6,0,0,0-10.76,5L151.94,218H104.06l13.76-45.84a6,6,0,0,0-10.76-5,42,42,0,1,1-20.91-62.69,6,6,0,0,0,7-9,42,42,0,1,1,69.72,0,6,6,0,0,0,7,9A42,42,0,1,1,184,186Z"/></svg>`;
}
