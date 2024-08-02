export const iconPhThinContactlessPaymentThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M93.54,102.13a55.39,55.39,0,0,1,0,51.74A4,4,0,0,1,90,156a4.07,4.07,0,0,1-1.87-.46,4,4,0,0,1-1.67-5.41,46.73,46.73,0,0,0,0-44.26,4,4,0,1,1,7.08-3.74Zm50.58-33.66a4,4,0,0,0-1.65,5.41,114.67,114.67,0,0,1,0,108.24,4,4,0,1,0,7.06,3.76,122.65,122.65,0,0,0,0-115.76A4,4,0,0,0,144.12,68.47Zm-28,16a4,4,0,0,0-1.65,5.41,81,81,0,0,1,0,76.24,4,4,0,1,0,7.06,3.76,89,89,0,0,0,0-83.76A4,4,0,0,0,116.12,84.47ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"/></svg>`;
}
