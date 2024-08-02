export const iconPhLightAlignCenterVertical = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,122H206V72a14,14,0,0,0-14-14H152a14,14,0,0,0-14,14v50H118V48a14,14,0,0,0-14-14H64A14,14,0,0,0,50,48v74H32a6,6,0,0,0,0,12H50v74a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V134h20v50a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V134h18a6,6,0,0,0,0-12ZM106,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2Zm88-24a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2Z"/></svg>`;
}
