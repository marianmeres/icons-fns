export const iconPhLightTrolleySuitcaseLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M88,158H216a14,14,0,0,0,14-14V72a14,14,0,0,0-14-14H182V40a14,14,0,0,0-14-14H136a14,14,0,0,0-14,14V58H88A14,14,0,0,0,74,72v72A14,14,0,0,0,88,158ZM134,40a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2V58H134ZM86,72a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2v72a2,2,0,0,1-2,2H88a2,2,0,0,1-2-2Zm0,152a14,14,0,1,1-14-14A14,14,0,0,1,86,224Zm144,0a14,14,0,1,1-14-14A14,14,0,0,1,230,224Zm16-40a6,6,0,0,1-6,6H32a6,6,0,0,1,0-12H42V75.31a2,2,0,0,0-.59-1.41L19.76,52.24a6,6,0,1,1,8.48-8.48L49.9,65.41a13.94,13.94,0,0,1,4.1,9.9V178H240A6,6,0,0,1,246,184Z"/></svg>`;
}
