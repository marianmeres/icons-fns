export const iconPhLightBellSimpleZ = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M166,224a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,224Zm-22-86H123.21L149,99.33A6,6,0,0,0,144,90H112a6,6,0,0,0,0,12h20.79L107,140.67a6,6,0,0,0,5,9.33h32a6,6,0,0,0,0-12Zm76.11,53a13.83,13.83,0,0,1-12.1,7H48a14,14,0,0,1-12.06-21.06C41.59,167.2,50,139.74,50,104a78,78,0,1,1,156,0c0,35.73,8.42,63.2,14.08,72.94A13.9,13.9,0,0,1,220.11,191Zm-10.41-8C202.13,170,194,139.68,194,104a66,66,0,1,0-132,0c0,35.69-8.14,66-15.71,79a2,2,0,0,0,0,2,1.9,1.9,0,0,0,1.7,1H208a1.9,1.9,0,0,0,1.7-1A2,2,0,0,0,209.7,183Z"/></svg>`;
}
