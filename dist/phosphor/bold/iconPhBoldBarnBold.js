export const iconPhBoldBarnBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M100,84a12,12,0,0,1,12-12h32a12,12,0,0,1,0,24H112A12,12,0,0,1,100,84ZM252,200a12,12,0,0,1-12,12H16a12,12,0,0,1,0-24h4V139.31A12,12,0,0,1,6.24,121l40-56a11.91,11.91,0,0,1,2.94-2.9l67.56-46.65.17-.11a19.94,19.94,0,0,1,22.18,0l.17.11,67.56,46.65a11.91,11.91,0,0,1,2.94,2.9l40,56A12,12,0,0,1,236,139.31V188h4A12,12,0,0,1,252,200ZM44,188H64V124a12,12,0,0,1,12-12H180a12,12,0,0,1,12,12v64h20V109.45L191.45,80.69,128,36.87,64.55,80.69,44,109.45Zm124-52H113.9L168,174.07ZM88,188h58.1L88,147.12Z"/></svg>`;
}
