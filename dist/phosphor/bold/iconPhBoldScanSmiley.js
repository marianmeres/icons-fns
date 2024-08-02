export const iconPhBoldScanSmiley = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,40V68a12,12,0,0,1-24,0V52H188a12,12,0,0,1,0-24h28A12,12,0,0,1,228,40ZM216,176a12,12,0,0,0-12,12v16H188a12,12,0,0,0,0,24h28a12,12,0,0,0,12-12V188A12,12,0,0,0,216,176ZM68,204H52V188a12,12,0,0,0-24,0v28a12,12,0,0,0,12,12H68a12,12,0,0,0,0-24ZM40,80A12,12,0,0,0,52,68V52H68a12,12,0,0,0,0-24H40A12,12,0,0,0,28,40V68A12,12,0,0,0,40,80Zm88,128a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,208Zm56-80a56,56,0,1,0-56,56A56.06,56.06,0,0,0,184,128Zm-80-24a16,16,0,1,0,16,16A16,16,0,0,0,104,104Zm48,0a16,16,0,1,0,16,16A16,16,0,0,0,152,104Z"/></svg>`;
}
