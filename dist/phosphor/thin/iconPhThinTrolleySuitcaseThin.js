export const iconPhThinTrolleySuitcaseThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M88,156H216a12,12,0,0,0,12-12V72a12,12,0,0,0-12-12H180V40a12,12,0,0,0-12-12H136a12,12,0,0,0-12,12V60H88A12,12,0,0,0,76,72v72A12,12,0,0,0,88,156ZM132,40a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4V60H132ZM84,72a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4v72a4,4,0,0,1-4,4H88a4,4,0,0,1-4-4Zm0,152a12,12,0,1,1-12-12A12,12,0,0,1,84,224Zm144,0a12,12,0,1,1-12-12A12,12,0,0,1,228,224Zm16-40a4,4,0,0,1-4,4H32a4,4,0,0,1,0-8H44V75.31a4,4,0,0,0-1.17-2.83L21.17,50.83a4,4,0,0,1,5.66-5.66L48.49,66.83A12,12,0,0,1,52,75.31V180H240A4,4,0,0,1,244,184Z"/></svg>`;
}
