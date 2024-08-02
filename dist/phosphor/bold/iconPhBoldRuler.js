export const iconPhBoldRuler = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M238.15,70.54,185.46,17.86a20,20,0,0,0-28.29,0L17.85,157.17a20,20,0,0,0,0,28.29l52.69,52.68a20,20,0,0,0,28.29,0L238.15,98.83A20,20,0,0,0,238.15,70.54ZM84.68,218.34l-47-47L64,145l23.52,23.52a12,12,0,0,0,17-17L81,128l15-15,23.51,23.52a12,12,0,0,0,17-17L113,96l15-15,23.52,23.52a12,12,0,0,0,17-17L145,64l26.35-26.34,47,47Z"/></svg>`;
}
