export const iconPhLightBellZLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M150,144a6,6,0,0,1-6,6H112a6,6,0,0,1-5-9.33L132.79,102H112a6,6,0,0,1,0-12h32a6,6,0,0,1,5,9.33L123.21,138H144A6,6,0,0,1,150,144Zm70.11,47a13.83,13.83,0,0,1-12.1,7H165.52a38,38,0,0,1-75,0H48a14,14,0,0,1-12.06-21.06C41.59,167.2,50,139.74,50,104a78,78,0,1,1,156,0c0,35.73,8.42,63.2,14.08,72.94A13.9,13.9,0,0,1,220.11,191Zm-66.82,7H102.71a26,26,0,0,0,50.58,0Zm56.41-15C202.13,170,194,139.68,194,104a66,66,0,1,0-132,0c0,35.69-8.14,66-15.71,79a2,2,0,0,0,0,2,1.9,1.9,0,0,0,1.7,1H208a1.9,1.9,0,0,0,1.7-1A2,2,0,0,0,209.7,183Z"/></svg>`;
}
