export const iconPhBoldLightningABold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M179.76,110.75a12,12,0,0,0-6.85-8.56L126,81.12l12.9-54.35a12,12,0,0,0-20.48-10.92L23.19,118.7a12,12,0,0,0,3.89,19.1l47,21.08L61.12,213.22a12,12,0,0,0,20.49,10.93L176.8,121.29A12,12,0,0,0,179.76,110.75ZM95,174.31l4.64-19.54a12,12,0,0,0-6.76-13.72l-40.76-18.3L105,65.69l-4.64,19.54A12,12,0,0,0,107.08,99l40.77,18.3Zm147.7,36.32-36-72a12,12,0,0,0-21.47,0l-36,72a12,12,0,1,0,21.46,10.73l4.68-9.36h41.17l4.68,9.36a12,12,0,1,0,21.47-10.73ZM187.41,188,196,170.83,204.58,188Z"/></svg>`;
}
