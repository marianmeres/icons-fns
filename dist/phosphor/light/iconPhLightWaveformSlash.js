export const iconPhLightWaveformSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M54,96v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0ZM52.44,36A6,6,0,0,0,43.56,44L82,86.32V224a6,6,0,0,0,12,0V99.52l28,30.8V192a6,6,0,0,0,12,0V143.52L203.56,220a6,6,0,0,0,8.88-8.08ZM88,42.43a6,6,0,0,0,6-6V32a6,6,0,0,0-12,0v4.43A6,6,0,0,0,88,42.43Zm40,44a6,6,0,0,0,6-6V64a6,6,0,0,0-12,0V80.43A6,6,0,0,0,128,86.43Zm40,44a6,6,0,0,0,6-6V96a6,6,0,0,0-12,0v28.43A6,6,0,0,0,168,130.43ZM208,74a6,6,0,0,0-6,6v88.43a6,6,0,0,0,12,0V80A6,6,0,0,0,208,74Z"/></svg>`;
}
