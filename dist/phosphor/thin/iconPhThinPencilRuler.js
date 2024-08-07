export const iconPhThinPencilRuler = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V172h28a4,4,0,0,0,0-8H156V132h28a4,4,0,0,0,0-8H156V92h28a4,4,0,0,0,0-8H156V48a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM74.83,29.17a4,4,0,0,0-5.66,0l-32,32A4,4,0,0,0,36,64V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V64a4,4,0,0,0-1.17-2.83ZM44,76H68V180H44Zm56,132a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V188h56Zm0-28H76V76h24Zm0-112H44V65.66l28-28,28,28Z"/></svg>`;
}
