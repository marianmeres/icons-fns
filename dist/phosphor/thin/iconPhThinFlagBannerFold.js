export const iconPhThinFlagBannerFold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M235.36,45.83A4,4,0,0,0,232,44H152a4,4,0,0,0-3.64,2.34L138.52,68H28a4,4,0,0,0-3,6.69L62.59,116,25,157.31A4,4,0,0,0,28,164h73.09a4,4,0,0,0,3.64-2.35L114.58,140h71.21l-37.43,82.34a4,4,0,0,0,2,5.3A4.07,4.07,0,0,0,152,228a4,4,0,0,0,3.64-2.35l80-176A4,4,0,0,0,235.36,45.83ZM98.52,156H37L71,118.69a4,4,0,0,0,0-5.38L37,76h97.84Zm90.9-24H118.21l36.37-80h71.21Z"/></svg>`;
}
