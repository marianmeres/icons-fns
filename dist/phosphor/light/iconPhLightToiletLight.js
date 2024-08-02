export const iconPhLightToiletLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M118,64a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h16A6,6,0,0,1,118,64Zm52.14,132,3.72,26A14,14,0,0,1,160,238H96a14,14,0,0,1-13.86-16l3.72-26A94.1,94.1,0,0,1,34,112a6,6,0,0,1,6-6H58V40A14,14,0,0,1,72,26H184a14,14,0,0,1,14,14v66h18a6,6,0,0,1,6,6A94.1,94.1,0,0,1,170.14,196ZM70,106H186V40a2,2,0,0,0-2-2H72a2,2,0,0,0-2,2Zm88.71,94.84a94,94,0,0,1-61.42,0L94,223.72a2,2,0,0,0,.47,1.59A2,2,0,0,0,96,226h64a2,2,0,0,0,1.51-.69,2,2,0,0,0,.47-1.59ZM209.78,118H46.22a82,82,0,0,0,163.56,0Z"/></svg>`;
}
