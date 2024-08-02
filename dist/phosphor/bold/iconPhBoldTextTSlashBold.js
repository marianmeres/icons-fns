export const iconPhBoldTextTSlashBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216.07,224.88a12,12,0,0,1-16.95-.81L140,159v29h20a12,12,0,0,1,0,24H96a12,12,0,0,1,0-24h20V132.64L68,79.84V88a12,12,0,0,1-24,0V56a11.75,11.75,0,0,1,.23-2.31l-5.11-5.62A12,12,0,1,1,56.88,31.93l160,176A12,12,0,0,1,216.07,224.88ZM116,68v.57a12,12,0,1,0,24,0V68h48V88a12,12,0,0,0,24,0V56a12,12,0,0,0-12-12H116.6a12,12,0,0,0-.6,24Z"/></svg>`;
}
