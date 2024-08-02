export const iconPhLightFlagBannerFoldLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M237,44.75A6,6,0,0,0,232,42H152a6,6,0,0,0-5.46,3.52L137.23,66H28a6,6,0,0,0-4.44,10l36.33,40L23.56,156A6,6,0,0,0,28,166h73.09a6,6,0,0,0,5.46-3.52L115.86,142h66.82l-36.14,79.52a6,6,0,0,0,3,7.94A5.9,5.9,0,0,0,152,230a6,6,0,0,0,5.46-3.52l80-176A6,6,0,0,0,237,44.75ZM97.23,154H41.56l30.88-34a6,6,0,0,0,0-8.08L41.56,78h90.21Zm90.91-24H121.32l34.54-76h66.82Z"/></svg>`;
}
