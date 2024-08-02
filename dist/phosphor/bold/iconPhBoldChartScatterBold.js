export const iconPhBoldChartScatterBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236,208a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V48a12,12,0,0,1,24,0V196H224A12,12,0,0,1,236,208ZM116,148a16,16,0,1,0,16-16A16,16,0,0,0,116,148Zm-8-40A16,16,0,1,0,92,92,16,16,0,0,0,108,108ZM76,180a16,16,0,1,0-16-16A16,16,0,0,0,76,180Zm96-48a16,16,0,1,0-16-16A16,16,0,0,0,172,132Zm24-40a16,16,0,1,0-16-16A16,16,0,0,0,196,92Zm-24,72a16,16,0,1,0,16-16A16,16,0,0,0,172,164Z"/></svg>`;
}
