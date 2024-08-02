export const iconPhBoldChalkboardTeacher = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M56,84A12,12,0,0,1,68,72H188a12,12,0,0,1,12,12v88a12,12,0,0,1-24,0V96H68A12,12,0,0,1,56,84ZM236,56V200a20,20,0,0,1-20,20H149.26a12,12,0,0,1-11.4-8.26,36,36,0,0,0-67.74,0A12,12,0,0,1,58.74,220H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56ZM104,164a16,16,0,1,0-16-16A16,16,0,0,0,104,164ZM212,60H44V196h6.92a60.18,60.18,0,0,1,21.76-23.16,40,40,0,1,1,62.64,0A60.18,60.18,0,0,1,157.08,196H212Z"/></svg>`;
}
