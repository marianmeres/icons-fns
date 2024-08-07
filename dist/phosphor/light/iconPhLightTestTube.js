export const iconPhLightTestTube = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236.24,87.76l-60-60a6,6,0,0,0-8.48,0L38.53,157A42.77,42.77,0,1,0,99,217.47L211.24,105.24l22.66-7.55a6,6,0,0,0,2.34-9.93ZM90.53,209A30.77,30.77,0,1,1,47,165.47l29.13-29.12c8.84-3.14,22.84-4.56,41.08,5,12.28,6.41,23.13,8.66,32.27,8.71ZM206.1,94.31a6,6,0,0,0-2.34,1.45l-39.9,39.89c-8.84,3.14-22.84,4.56-41.08-5C110.5,124.27,99.65,122,90.51,122L172,40.49l48.89,48.89Z"/></svg>`;
}
