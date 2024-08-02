export const iconPhBoldEngineBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236,100H225L190.83,65.86A19.86,19.86,0,0,0,176.69,60H144V44h20a12,12,0,0,0,0-24H100a12,12,0,0,0,0,24h20V60H64A20,20,0,0,0,44,80v48H28V108a12,12,0,0,0-24,0v64a12,12,0,0,0,24,0V152H44v16.69a19.86,19.86,0,0,0,5.86,14.14l39.31,39.31A19.86,19.86,0,0,0,103.31,228h73.38a19.86,19.86,0,0,0,14.14-5.86L225,188h11a20,20,0,0,0,20-20V120A20,20,0,0,0,236,100Zm-4,64H220a12,12,0,0,0-8.49,3.51L175,204H105L68,167V84H175l36.48,36.49A12,12,0,0,0,220,124h12Z"/></svg>`;
}
