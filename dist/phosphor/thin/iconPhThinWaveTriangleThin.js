export const iconPhThinWaveTriangleThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M235.24,130.34l-52,72a4,4,0,0,1-6.48,0L76,62.83,27.24,130.34a4,4,0,1,1-6.48-4.68l52-72a4,4,0,0,1,6.48,0L180,193.17l48.76-67.51a4,4,0,0,1,6.48,4.68Z"/></svg>`;
}
