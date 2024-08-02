export const iconPhBoldScissors = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M238.78,183.79,98.28,87.65A40.18,40.18,0,0,0,100,76a40,40,0,1,0-15.29,31.45l30,20.56-30,20.56a40,40,0,1,0,3.57,59.74h0A39.73,39.73,0,0,0,100,180a40.18,40.18,0,0,0-1.72-11.66L136,142.54l89.22,61.06a12,12,0,0,0,13.56-19.81ZM71.31,191.33h0A16,16,0,1,1,76,180,16,16,0,0,1,71.31,191.33ZM48.69,87.3a16,16,0,1,1,22.62,0h0A16,16,0,0,1,48.69,87.3Zm112.82,23.24a12,12,0,0,1,3.13-16.68L225.22,52.4a12,12,0,0,1,13.56,19.81l-60.59,41.46a12,12,0,0,1-16.68-3.13Z"/></svg>`;
}
