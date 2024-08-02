export const iconPhLightMicroscope = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,210H199.53A85.2,85.2,0,0,0,222,152a86.1,86.1,0,0,0-80-85.77V32a14,14,0,0,0-14-14H80A14,14,0,0,0,66,32V136a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V78.26A74,74,0,0,1,182,210H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12Zm-94-74a2,2,0,0,1-2,2H80a2,2,0,0,1-2-2V32a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2ZM72,182a6,6,0,0,1,0-12h64a6,6,0,0,1,0,12Z"/></svg>`;
}
