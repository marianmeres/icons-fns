export const iconPhBoldRankingBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M108.62,103.79a12,12,0,0,1,7.59-15.17l12-4A12,12,0,0,1,144,96v40a12,12,0,0,1-24,0V112h0A12,12,0,0,1,108.62,103.79ZM252,208a12,12,0,0,1-12,12H16a12,12,0,0,1,0-24h4V104A20,20,0,0,1,40,84H76V56A20,20,0,0,1,96,36h64a20,20,0,0,1,20,20v68h36a20,20,0,0,1,20,20v52h4A12,12,0,0,1,252,208Zm-72-60v48h32V148Zm-80,48h56V60H100Zm-56,0H76V108H44Z"/></svg>`;
}
