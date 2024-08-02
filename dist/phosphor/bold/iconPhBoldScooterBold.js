export const iconPhBoldScooterBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212,132l-.68,0L179.38,36.21A12,12,0,0,0,168,28H136a12,12,0,0,0,0,24h23.35l14.83,44.49L114.59,164H83.2a40,40,0,1,0-2.55,24H120a12,12,0,0,0,9-4.06l54-61.13,5.6,16.81A40,40,0,1,0,212,132ZM44,188a16,16,0,1,1,16-16A16,16,0,0,1,44,188Zm168,0a16,16,0,1,1,16-16A16,16,0,0,1,212,188Z"/></svg>`;
}
