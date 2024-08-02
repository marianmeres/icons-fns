export const iconPhLightCheese = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,34a5.92,5.92,0,0,0-1.72.25l-160,48h0A6,6,0,0,0,18,88v24a6,6,0,0,0,6,6h8a18.09,18.09,0,0,1,18,17.65,17.59,17.59,0,0,1-5.15,12.7A18.91,18.91,0,0,1,31.46,154H24a6,6,0,0,0-6,6v32a6,6,0,0,0,6,6H224a14,14,0,0,0,14-14V88A54.06,54.06,0,0,0,184,34Zm.85,12a42.07,42.07,0,0,1,40.72,36H64.88ZM194,104a26,26,0,1,1-50-10h48A25.87,25.87,0,0,1,194,104Zm-56,82H86v-2a26,26,0,0,1,52,0Zm88-2a2,2,0,0,1-2,2H150v-2a38,38,0,0,0-76,0v2H30V166h1.46a31,31,0,0,0,22-9.25A29.45,29.45,0,0,0,62,135.42,30.14,30.14,0,0,0,32,106H30V94H131.34a38,38,0,1,0,73.32,0H226Z"/></svg>`;
}
