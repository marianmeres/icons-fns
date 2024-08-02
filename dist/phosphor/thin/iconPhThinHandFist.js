export const iconPhThinHandFist = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,84H180V64a28,28,0,0,0-52-14.41A28,28,0,0,0,76,64v4.43A28,28,0,0,0,28,88v40a100,100,0,0,0,200,0V112A28,28,0,0,0,200,84ZM152,44a20,20,0,0,1,20,20V84H136a11.8,11.8,0,0,0-4,.7V64A20,20,0,0,1,152,44ZM84,64a20,20,0,0,1,40,0v40a20,20,0,0,1-40,0ZM36,88a20,20,0,0,1,40,0v16a20,20,0,0,1-40,0Zm184,40a92,92,0,0,1-184,0v-4.42a28,28,0,0,0,44-5.17,28,28,0,0,0,45.73,3.23,28.11,28.11,0,0,0,18.59,17.29A44,44,0,0,0,124,176a4,4,0,0,0,8,0,36,36,0,0,1,36-36,4,4,0,0,0,0-8H152a20,20,0,0,1-20-20V96a4,4,0,0,1,4-4h64a20,20,0,0,1,20,20Z"/></svg>`;
}
