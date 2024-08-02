export const iconPhBoldFastForwardBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M246.81,111.29,158.63,55.12A19.91,19.91,0,0,0,128,71.84v30L54.63,55.12A19.91,19.91,0,0,0,24,71.84V184.16a19.93,19.93,0,0,0,30.63,16.72L128,154.15v30a19.93,19.93,0,0,0,30.63,16.72l88.18-56.17a19.79,19.79,0,0,0,0-33.42ZM48,176.64V79.36L124.38,128Zm104,0V79.36L228.38,128Z"/></svg>`;
}
