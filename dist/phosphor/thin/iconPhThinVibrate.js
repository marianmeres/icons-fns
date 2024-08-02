export const iconPhThinVibrate = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M160,36H96A20,20,0,0,0,76,56V200a20,20,0,0,0,20,20h64a20,20,0,0,0,20-20V56A20,20,0,0,0,160,36Zm12,164a12,12,0,0,1-12,12H96a12,12,0,0,1-12-12V56A12,12,0,0,1,96,44h64a12,12,0,0,1,12,12ZM212,88v80a4,4,0,0,1-8,0V88a4,4,0,0,1,8,0Zm32,16v48a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0ZM52,88v80a4,4,0,0,1-8,0V88a4,4,0,0,1,8,0ZM20,104v48a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z"/></svg>`;
}
