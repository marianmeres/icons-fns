export const iconPhBoldVideoConferenceBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,80H156V60h56ZM52,120a12,12,0,1,1,12,12A12,12,0,0,1,52,120Zm-8,49.77C46.69,161.84,55,156,64,156c9.43,0,18.19,6.44,20.38,15a12,12,0,0,0,23.24-6,43.22,43.22,0,0,0-15.16-23A36,36,0,0,0,44,90.08V60h88V196H44ZM156,196V140h56v56ZM168,88a16,16,0,1,1,16,16A16,16,0,0,1,168,88Zm32,80a16,16,0,1,1-16-16A16,16,0,0,1,200,168Z"/></svg>`;
}
