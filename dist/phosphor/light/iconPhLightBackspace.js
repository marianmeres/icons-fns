export const iconPhLightBackspace = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,42H68.53a14,14,0,0,0-12,6.8L10.86,124.91a6,6,0,0,0,0,6.18L56.53,207.2a14,14,0,0,0,12,6.8H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,158a2,2,0,0,1-2,2H68.53a2,2,0,0,1-1.71-1h0L23,128,66.82,55a2,2,0,0,1,1.71-1H216a2,2,0,0,1,2,2Zm-53.76-91.76L144.48,128l19.76,19.76a6,6,0,1,1-8.48,8.48L136,136.48l-19.76,19.76a6,6,0,0,1-8.48-8.48L127.52,128l-19.76-19.76a6,6,0,0,1,8.48-8.48L136,119.52l19.76-19.76a6,6,0,0,1,8.48,8.48Z"/></svg>`;
}
