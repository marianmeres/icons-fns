export const iconPhLightJar = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M182,50.48V32a14,14,0,0,0-14-14H88A14,14,0,0,0,74,32V50.48A38.05,38.05,0,0,0,42,88V200a38,38,0,0,0,38,38h96a38,38,0,0,0,38-38V88A38.05,38.05,0,0,0,182,50.48ZM170,32V50H150V30h18A2,2,0,0,1,170,32ZM118,50V30h20V50ZM88,30h18V50H86V32A2,2,0,0,1,88,30ZM202,200a26,26,0,0,1-26,26H80a26,26,0,0,1-26-26V88A26,26,0,0,1,80,62h96a26,26,0,0,1,26,26Z"/></svg>`;
}
