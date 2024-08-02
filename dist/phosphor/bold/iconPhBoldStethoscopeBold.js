export const iconPhBoldStethoscopeBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,160a40,40,0,1,0-52.64,37.94A28,28,0,0,1,168,220H144a28,28,0,0,1-28-28V154.9c31.73-5.78,56-34.09,56-67.73V40a12,12,0,0,0-12-12H136a12,12,0,0,0,0,24h12V87.17c0,24.4-19.47,44.52-43.41,44.83A44,44,0,0,1,60,88V52H72a12,12,0,0,0,0-24H48A12,12,0,0,0,36,40V88a68,68,0,0,0,56,66.93V192a52.06,52.06,0,0,0,52,52h24a52.06,52.06,0,0,0,51.61-45.72A40.08,40.08,0,0,0,248,160Zm-40,16a16,16,0,1,1,16-16A16,16,0,0,1,208,176Z"/></svg>`;
}
