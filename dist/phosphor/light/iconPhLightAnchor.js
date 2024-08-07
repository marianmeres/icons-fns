export const iconPhLightAnchor = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,138a6,6,0,0,0-6,6c0,26.09-15,31.52-39.58,38.21C158,185.6,143.79,189.47,134,199.16V126h34a6,6,0,0,0,0-12H134V85.4a30,30,0,1,0-12,0V114H88a6,6,0,0,0,0,12h34v73.16c-9.79-9.69-24-13.56-36.42-16.95C61,175.52,46,170.09,46,144a6,6,0,0,0-12,0c0,36.58,26.85,43.91,48.42,49.79C107,200.48,122,205.91,122,232a6,6,0,0,0,12,0c0-26.09,15-31.52,39.58-38.21C195.15,187.91,222,180.58,222,144A6,6,0,0,0,216,138ZM110,56a18,18,0,1,1,18,18A18,18,0,0,1,110,56Z"/></svg>`;
}
