export const iconPhThinGooglePhotosLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,124H185.68A68,68,0,0,0,128,20a4,4,0,0,0-4,4V70.32A68,68,0,0,0,20,128a4,4,0,0,0,4,4H70.32A68,68,0,0,0,128,236a4,4,0,0,0,4-4V185.68A68,68,0,0,0,236,128,4,4,0,0,0,232,124ZM188,88a59.28,59.28,0,0,1-12,36H132V28.13A60.08,60.08,0,0,1,188,88ZM88,68a59.28,59.28,0,0,1,36,12v44H28.13A60.08,60.08,0,0,1,88,68ZM68,168a59.28,59.28,0,0,1,12-36h44v95.87A60.08,60.08,0,0,1,68,168Zm100,20a59.28,59.28,0,0,1-36-12V132h95.87A60.08,60.08,0,0,1,168,188Z"/></svg>`;
}
