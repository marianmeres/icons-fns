export const iconPhBoldArrowsIn = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M140,104V64a12,12,0,0,1,24,0V75l35.51-35.52a12,12,0,0,1,17,17L181,92h11a12,12,0,0,1,0,24H152A12,12,0,0,1,140,104Zm-36,36H64a12,12,0,0,0,0,24H75L39.51,199.51a12,12,0,0,0,17,17L92,181v11a12,12,0,0,0,24,0V152A12,12,0,0,0,104,140Zm77,24h11a12,12,0,0,0,0-24H152a12,12,0,0,0-12,12v40a12,12,0,0,0,24,0V181l35.51,35.52a12,12,0,0,0,17-17ZM104,52A12,12,0,0,0,92,64V75L56.49,39.51a12,12,0,0,0-17,17L75,92H64a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V64A12,12,0,0,0,104,52Z"/></svg>`;
}
