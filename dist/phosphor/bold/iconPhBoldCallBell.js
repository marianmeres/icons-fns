export const iconPhBoldCallBell = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M24,180H232a12,12,0,0,0,0-24h-4.09A100.16,100.16,0,0,0,140,60.72V44h12a12,12,0,0,0,0-24H104a12,12,0,0,0,0,24h12V60.72A100.16,100.16,0,0,0,28.09,156H24a12,12,0,0,0,0,24ZM128,84a76.09,76.09,0,0,1,75.89,72H52.11A76.09,76.09,0,0,1,128,84ZM244,208a12,12,0,0,1-12,12H24a12,12,0,0,1,0-24H232A12,12,0,0,1,244,208Z"/></svg>`;
}
