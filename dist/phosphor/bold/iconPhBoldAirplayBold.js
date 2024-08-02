export const iconPhBoldAirplayBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M137.11,152.19a12,12,0,0,0-18.22,0l-48,56A12,12,0,0,0,80,228h96a12,12,0,0,0,9.11-19.81Zm-31,51.81L128,178.44,149.91,204ZM236,64V176a28,28,0,0,1-28,28h-4a12,12,0,0,1,0-24h4a4,4,0,0,0,4-4V64a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4V176a4,4,0,0,0,4,4h4a12,12,0,0,1,0,24H48a28,28,0,0,1-28-28V64A28,28,0,0,1,48,36H208A28,28,0,0,1,236,64Z"/></svg>`;
}
