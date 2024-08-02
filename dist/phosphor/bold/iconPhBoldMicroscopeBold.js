export const iconPhBoldMicroscopeBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,204H212A92.1,92.1,0,0,0,148,60.78V32a20,20,0,0,0-20-20H80A20,20,0,0,0,60,32v96a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V85.08A68.1,68.1,0,0,1,204,152a67.39,67.39,0,0,1-24.18,52H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24ZM124,124H84V36h40ZM72,188a12,12,0,0,1,0-24h64a12,12,0,0,1,0,24Z"/></svg>`;
}
