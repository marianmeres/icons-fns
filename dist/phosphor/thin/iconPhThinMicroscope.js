export const iconPhThinMicroscope = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,212H194.8A83.2,83.2,0,0,0,220,152a84.1,84.1,0,0,0-80-83.9V32a12,12,0,0,0-12-12H80A12,12,0,0,0,68,32V136a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V76.11A76,76,0,0,1,182.64,212H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8Zm-92-76a4,4,0,0,1-4,4H80a4,4,0,0,1-4-4V32a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM72,180a4,4,0,0,1,0-8h64a4,4,0,0,1,0,8Z"/></svg>`;
}
