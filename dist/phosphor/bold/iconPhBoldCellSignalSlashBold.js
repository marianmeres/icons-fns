export const iconPhBoldCellSignalSlashBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M92,152v48a12,12,0,0,1-24,0V152a12,12,0,0,1,24,0ZM40,180a12,12,0,0,0-12,12v8a12,12,0,0,0,24,0v-8A12,12,0,0,0,40,180Zm176.88,27.93-160-176A12,12,0,1,0,39.12,48.07L108,123.84V200a12,12,0,0,0,24,0V150.24l16,17.6V200a12,12,0,0,0,24,0v-5.76l27.12,29.83a12,12,0,0,0,17.76-16.14ZM160,115.74a12,12,0,0,0,12-12V72a12,12,0,0,0-24,0v31.74A12,12,0,0,0,160,115.74Zm40,44a12,12,0,0,0,12-12V32a12,12,0,0,0-24,0V147.74A12,12,0,0,0,200,159.74Z"/></svg>`;
}
