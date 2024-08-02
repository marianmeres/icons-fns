export const iconPhBoldTextColumns = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M120,64a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24h68A12,12,0,0,1,120,64ZM108,92H40a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm40-96h68a12,12,0,0,0,0-24H148a12,12,0,0,0,0,24Zm68,16H148a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm0,40H148a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm0,40H148a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Z"/></svg>`;
}
