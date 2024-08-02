export const iconPhThinDressThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M211,211.27l-.06-.12-46.41-98.86,21.68-34,0-.1a11.94,11.94,0,0,0,0-12.34l-.15-.24L164,34V8a4,4,0,0,0-8,0V33.82l-6.13,7.67a28,28,0,0,1-43.74,0L100,33.82V8a4,4,0,0,0-8,0V34L69.86,65.59l-.15.24a11.94,11.94,0,0,0,0,12.34.93.93,0,0,1,.05.1l21.68,34L45,211.15l-.06.12A12,12,0,0,0,56,228H200a12,12,0,0,0,11-16.73ZM76.54,74a4,4,0,0,1,0-4L96.21,41.9l3.68,4.59a36,36,0,0,0,56.22,0l3.68-4.59L179.49,70a4,4,0,0,1,0,4l-21.65,34H98.19ZM203.33,218.2A3.94,3.94,0,0,1,200,220H56a3.94,3.94,0,0,1-3.33-1.8,3.89,3.89,0,0,1-.36-3.72L98.54,116h58.92l46.23,98.48A3.89,3.89,0,0,1,203.33,218.2Z"/></svg>`;
}