export const iconPhThinNumberNineThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,44a52,52,0,1,0,24.74,97.73L116.51,206a4,4,0,0,0,7,3.92L173,122A52,52,0,0,0,128,44Zm0,96a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,140Z"/></svg>`;
}
