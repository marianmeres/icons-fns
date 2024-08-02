export const iconPhLightOpenAiLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M222,114.56a54,54,0,0,0-58.67-74.73,54,54,0,0,0-94,13.46A54,54,0,0,0,34,141.44a54,54,0,0,0,35.56,73.65A54.54,54.54,0,0,0,83.59,217a52.86,52.86,0,0,0,9.06-.78,54,54,0,0,0,94-13.46A54,54,0,0,0,222,114.56ZM183.37,52.5a42,42,0,0,1,29.21,53.14,54.84,54.84,0,0,0-5.08-3.33L163,76.62a6,6,0,0,0-6,0l-47,27.13V80.66l41.5-24A41.73,41.73,0,0,1,183.37,52.5ZM146,138.39l-18,10.39-18-10.39V117.61l18-10.39,18,10.39ZM78,72a42,42,0,0,1,72.92-28.43,56.18,56.18,0,0,0-5.42,2.74L101,72a6,6,0,0,0-3,5.19v54.27L78,119.92ZM39.13,85.93a41.75,41.75,0,0,1,27.22-20A55.09,55.09,0,0,0,66,72v51.38a6,6,0,0,0,3,5.2l47,27.13L96,167.26l-41.5-24A42,42,0,0,1,39.13,85.93ZM72.63,203.5a42,42,0,0,1-29.21-53.14,54.84,54.84,0,0,0,5.08,3.33L93,179.38a6,6,0,0,0,6,0l47-27.13v23.09l-41.5,24A41.73,41.73,0,0,1,72.63,203.5ZM178,184a42,42,0,0,1-72.92,28.43,56.18,56.18,0,0,0,5.42-2.74L155,184a6,6,0,0,0,3-5.19V124.54l20,11.54Zm38.87-13.93a41.75,41.75,0,0,1-27.22,20A55.09,55.09,0,0,0,190,184V132.62a6,6,0,0,0-3-5.2l-47-27.13,20-11.55,41.5,24A42,42,0,0,1,216.87,170.07Z"/></svg>`;
}
