export const iconPhBoldArrowsCounterClockwise = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M88,108H40A12,12,0,0,1,28,96V48a12,12,0,0,1,24,0V67l7.8-7.8A99.42,99.42,0,0,1,130,29.94h.56a99.38,99.38,0,0,1,69.87,28.47,12,12,0,0,1-16.78,17.16,76,76,0,0,0-106.84.63L69,84H88a12,12,0,0,1,0,24Zm128,40H168a12,12,0,0,0,0,24h19l-7.8,7.8a75.55,75.55,0,0,1-53.32,22.26h-.43a75.49,75.49,0,0,1-53.09-21.63,12,12,0,0,0-16.78,17.16,99.38,99.38,0,0,0,69.87,28.47H126a99.42,99.42,0,0,0,70.16-29.29L204,189v19a12,12,0,0,0,24,0V160A12,12,0,0,0,216,148Z"/></svg>`;
}
