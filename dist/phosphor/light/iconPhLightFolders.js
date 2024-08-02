export const iconPhLightFolders = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,66H154L125.73,44.8a14,14,0,0,0-8.4-2.8H72A14,14,0,0,0,58,56V74H40A14,14,0,0,0,26,88V200a14,14,0,0,0,14,14H192.89A13.12,13.12,0,0,0,206,200.89V182h18.89A13.12,13.12,0,0,0,238,168.89V80A14,14,0,0,0,224,66ZM194,200.89a1.11,1.11,0,0,1-1.11,1.11H40a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2H85.33a2,2,0,0,1,1.2.4l29.87,22.4A6,6,0,0,0,120,110h72a2,2,0,0,1,2,2Zm32-32a1.11,1.11,0,0,1-1.11,1.11H206V112a14,14,0,0,0-14-14H122L93.73,76.8a14,14,0,0,0-8.4-2.8H70V56a2,2,0,0,1,2-2h45.33a2,2,0,0,1,1.2.4L148.4,76.8A6,6,0,0,0,152,78h72a2,2,0,0,1,2,2Z"/></svg>`;
}
