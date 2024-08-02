export const iconPhBoldCompassRose = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M247,116.39l-20.47-5.34A100.27,100.27,0,0,0,145,29.44L139.61,9a12,12,0,0,0-23.22,0l-5.34,20.47a100.27,100.27,0,0,0-81.61,81.61L9,116.39a12,12,0,0,0,0,23.22L29.44,145a100.27,100.27,0,0,0,81.61,81.61L116.39,247a12,12,0,0,0,23.22,0L145,226.56A100.27,100.27,0,0,0,226.56,145L247,139.61a12,12,0,0,0,0-23.22Zm-46.88-12.23-38.31-10-10-38.31A76.32,76.32,0,0,1,200.15,104.16Zm-82.8-3.78L128,59.54l10.65,40.84L128,111ZM128,145l10.65,10.65L128,196.46l-10.65-40.84Zm-27.62-27.62L111,128l-10.65,10.65L59.54,128Zm55.24,21.3L145,128l10.65-10.65L196.46,128Zm-51.46-82.8-10,38.31-38.31,10A76.32,76.32,0,0,1,104.16,55.85Zm-48.31,96,38.31,10,10,38.31A76.32,76.32,0,0,1,55.85,151.84Zm96,48.31,10-38.31,38.31-10A76.32,76.32,0,0,1,151.84,200.15Z"/></svg>`;
}
