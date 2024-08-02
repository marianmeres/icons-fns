export const iconPhThinStarFourThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228.13,116.77,162.94,93.06,139.23,27.87a11.95,11.95,0,0,0-22.46,0L93.06,93.06,27.87,116.77a11.95,11.95,0,0,0,0,22.46l65.19,23.71,23.71,65.19a11.95,11.95,0,0,0,22.46,0l23.71-65.19,65.19-23.71a11.95,11.95,0,0,0,0-22.46Zm-2.73,15-67,24.34a4,4,0,0,0-2.39,2.39l-24.34,67a4,4,0,0,1-7.44,0l-24.34-67a4,4,0,0,0-2.39-2.39L30.6,131.72a4,4,0,0,1,0-7.44L97.55,99.94a4,4,0,0,0,2.39-2.39L124.28,30.6a4,4,0,0,1,7.44,0l24.34,66.95a4,4,0,0,0,2.39,2.39l67,24.34a4,4,0,0,1,0,7.44Z"/></svg>`;
}
