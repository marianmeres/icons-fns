export const iconPhBoldLegoSmileyBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M84,112a16,16,0,1,1,16,16A16,16,0,0,1,84,112Zm72-16a16,16,0,1,0,16,16A16,16,0,0,0,156,96Zm-6.4,45.85a41,41,0,0,1-43.2,0,12,12,0,1,0-12.8,20.3,65,65,0,0,0,68.8,0,12,12,0,1,0-12.8-20.3ZM220,84v88a36.07,36.07,0,0,1-24,33.94V224a20,20,0,0,1-20,20H80a20,20,0,0,1-20-20V205.94A36.07,36.07,0,0,1,36,172V84A36,36,0,0,1,72,48H84V32a20,20,0,0,1,20-20h48a20,20,0,0,1,20,20V48h12A36,36,0,0,1,220,84ZM108,48h40V36H108Zm64,172V208H84v12ZM196,84a12,12,0,0,0-12-12H72A12,12,0,0,0,60,84v88a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12Z"/></svg>`;
}
