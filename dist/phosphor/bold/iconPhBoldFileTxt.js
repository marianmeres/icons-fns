export const iconPhBoldFileTxt = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M48,120a12,12,0,0,0,12-12V44h76V92a12,12,0,0,0,12,12h48v4a12,12,0,0,0,24,0V88a12,12,0,0,0-3.51-8.49l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v68A12,12,0,0,0,48,120ZM183,80H160V57Zm-25.27,79-15,21,15,21A12,12,0,1,1,138.24,215L128,200.65,117.76,215A12,12,0,1,1,98.24,201l15-21-15-21A12,12,0,1,1,117.76,145L128,159.35,138.24,145A12,12,0,1,1,157.76,159ZM92,152a12,12,0,0,1-12,12H72v44a12,12,0,0,1-24,0V164H40a12,12,0,0,1,0-24H80A12,12,0,0,1,92,152Zm136,0a12,12,0,0,1-12,12h-8v44a12,12,0,0,1-24,0V164h-8a12,12,0,0,1,0-24h40A12,12,0,0,1,228,152Z"/></svg>`;
}
