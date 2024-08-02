export const iconPhLightScrollLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M98,136a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H104A6,6,0,0,1,98,136Zm6-26h64a6,6,0,0,0,0-12H104a6,6,0,0,0,0,12Zm126,82a30,30,0,0,1-30,30H88a30,30,0,0,1-30-30V64a18,18,0,0,0-36,0c0,6.76,5.58,11.19,5.64,11.23A6,6,0,1,1,20.4,84.8C20,84.48,10,76.85,10,64A30,30,0,0,1,40,34H176a30,30,0,0,1,30,30V170h10a6,6,0,0,1,3.6,1.2C220,171.52,230,179.15,230,192Zm-124,0c0-6.76-5.59-11.19-5.64-11.23A6,6,0,0,1,104,170h90V64a18,18,0,0,0-18-18H64a29.82,29.82,0,0,1,6,18V192a18,18,0,0,0,36,0Zm112,0a14.94,14.94,0,0,0-4.34-10H115.88A24.83,24.83,0,0,1,118,192a29.87,29.87,0,0,1-6,18h88A18,18,0,0,0,218,192Z"/></svg>`;
}
