export const iconPhBoldIdentificationCard = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M148,108a12,12,0,0,1,12-12h28a12,12,0,0,1,0,24H160A12,12,0,0,1,148,108Zm40,28H168a12,12,0,0,0,0,24h20a12,12,0,0,0,0-24Zm48-80V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212ZM58.28,159.37A43.82,43.82,0,0,1,71.53,142a36,36,0,1,1,56.94,0,43.84,43.84,0,0,1,13.26,17.37,12,12,0,0,1-22.15,9.26C116.48,161.19,108.42,156,100,156s-16.47,5.2-19.59,12.63a12,12,0,1,1-22.13-9.26ZM88,120a12,12,0,1,0,12-12A12,12,0,0,0,88,120Z"/></svg>`;
}
