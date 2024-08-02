export const iconPhLightFlask = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,200.8,158,97.48V38h10a6,6,0,0,0,0-12H88a6,6,0,0,0,0,12H98V97.48L36,200.8A14,14,0,0,0,48,222H208a14,14,0,0,0,12-21.2ZM109.15,102.23a6,6,0,0,0,.85-3.09V38h36V99.14a6,6,0,0,0,.85,3.09l39.65,66.08c-12.41,3.16-30.86,3-55.79-9.66-16.94-8.58-33-12.8-47.83-12.64ZM209.72,209a2,2,0,0,1-1.74,1H48a2,2,0,0,1-1.71-3l29-48.41c14.89-2.08,31.68,1.55,49.94,10.79C144,178.8,159.67,182,172.42,182A67.89,67.89,0,0,0,192.89,179l16.8,28A2,2,0,0,1,209.72,209Z"/></svg>`;
}
