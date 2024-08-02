export const iconPhLightHandFist = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,82H182V64a30,30,0,0,0-54-18A30,30,0,0,0,74,64v0A30,30,0,0,0,26,88v40a102,102,0,0,0,204,0V112A30,30,0,0,0,200,82ZM152,46a18,18,0,0,1,18,18V82H136a14.71,14.71,0,0,0-2,.16V64A18,18,0,0,1,152,46ZM86,64a18,18,0,0,1,36,0v40a18,18,0,0,1-36,0ZM38,88a18,18,0,0,1,36,0v16a18,18,0,0,1-36,0Zm180,40a90,90,0,0,1-180,0h0a30,30,0,0,0,42-6,30,30,0,0,0,45.12,3.3A30.18,30.18,0,0,0,140,139.51,45.92,45.92,0,0,0,122,176a6,6,0,0,0,12,0,34,34,0,0,1,34-34,6,6,0,0,0,0-12H152a18,18,0,0,1-18-18V96a2,2,0,0,1,2-2h64a18,18,0,0,1,18,18Z"/></svg>`;
}
