export const iconPhBoldPrescriptionBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M189,188l19.52-19.51a12,12,0,0,0-17-17L172,171,138.93,138A56,56,0,0,0,124,28H72A12,12,0,0,0,60,40V192a12,12,0,0,0,24,0V140h23l48,48-19.52,19.51a12,12,0,0,0,17,17L172,205l19.51,19.52a12,12,0,0,0,17-17ZM84,52h40a32,32,0,0,1,0,64H84Z"/></svg>`;
}
