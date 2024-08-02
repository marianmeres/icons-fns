export const iconPhLightGenderIntersex = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,26H168a6,6,0,0,0,0,12h25.52l-30,29.94A62,62,0,1,0,114,173.7V194H88a6,6,0,0,0,0,12h26v26a6,6,0,0,0,12,0V206h26a6,6,0,0,0,0-12H126V173.7a62,62,0,0,0,45.28-96.5L202,46.48V72a6,6,0,0,0,12,0V32A6,6,0,0,0,208,26ZM120,162a50,50,0,1,1,50-50A50.06,50.06,0,0,1,120,162Z"/></svg>`;
}
