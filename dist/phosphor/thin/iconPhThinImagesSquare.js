export const iconPhThinImagesSquare = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,36H80A12,12,0,0,0,68,48V68H48A12,12,0,0,0,36,80V208a12,12,0,0,0,12,12H176a12,12,0,0,0,12-12V188h20a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM76,48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4v79l-23.51-23.52a12,12,0,0,0-17,0L95,180H80a4,4,0,0,1-4-4ZM180,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H68V176a12,12,0,0,0,12,12H180Zm28-28H106.34l70.83-70.83a4,4,0,0,1,5.66,0L212,138.34V176A4,4,0,0,1,208,180Zm-88-72a20,20,0,1,0-20-20A20,20,0,0,0,120,108Zm0-32a12,12,0,1,1-12,12A12,12,0,0,1,120,76Z"/></svg>`;
}
