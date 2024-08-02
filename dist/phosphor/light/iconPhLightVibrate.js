export const iconPhLightVibrate = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M160,34H96A22,22,0,0,0,74,56V200a22,22,0,0,0,22,22h64a22,22,0,0,0,22-22V56A22,22,0,0,0,160,34Zm10,166a10,10,0,0,1-10,10H96a10,10,0,0,1-10-10V56A10,10,0,0,1,96,46h64a10,10,0,0,1,10,10ZM214,88v80a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0Zm32,16v48a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0ZM54,88v80a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0ZM22,104v48a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z"/></svg>`;
}
