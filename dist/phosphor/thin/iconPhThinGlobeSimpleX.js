export const iconPhThinGlobeSimpleX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M218.83,170.83,197.66,192l21.17,21.17a4,4,0,0,1-5.66,5.66L192,197.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L186.34,192l-21.17-21.17a4,4,0,0,1,5.66-5.66L192,186.34l21.17-21.17a4,4,0,0,1,5.66,5.66ZM228,128a4,4,0,0,1-4,4H92.08c1.61,58.53,38.05,88.58,38.42,88.88h0A4,4,0,0,1,128,228a100,100,0,0,1,0-200h0A100.11,100.11,0,0,1,228,128ZM138.46,36.6c11.74,12.88,32.33,41.85,33.48,87.4h48A92.14,92.14,0,0,0,138.46,36.6ZM92.07,124h71.86C162.57,74.52,136.32,45.4,128,37.39,119.68,45.39,93.43,74.52,92.07,124Zm-56,0h48c1.15-45.55,21.74-74.52,33.48-87.4A92.14,92.14,0,0,0,36.09,124Zm48,8h-48a92.14,92.14,0,0,0,81.45,87.4C105.8,206.52,85.21,177.55,84.06,132Z"/></svg>`;
}
