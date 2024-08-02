export const iconPhLightDevices = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,74H206V64a22,22,0,0,0-22-22H40A22,22,0,0,0,18,64v96a22,22,0,0,0,22,22H154v10a22,22,0,0,0,22,22h48a22,22,0,0,0,22-22V96A22,22,0,0,0,224,74ZM40,170a10,10,0,0,1-10-10V64A10,10,0,0,1,40,54H184a10,10,0,0,1,10,10V74H176a22,22,0,0,0-22,22v74Zm194,22a10,10,0,0,1-10,10H176a10,10,0,0,1-10-10V96a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10ZM134,208a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h40A6,6,0,0,1,134,208Zm80-96a6,6,0,0,1-6,6H192a6,6,0,0,1,0-12h16A6,6,0,0,1,214,112Z"/></svg>`;
}
