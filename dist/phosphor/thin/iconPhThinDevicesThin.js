export const iconPhThinDevicesThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,76H204V64a20,20,0,0,0-20-20H40A20,20,0,0,0,20,64v96a20,20,0,0,0,20,20H156v12a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V96A20,20,0,0,0,224,76ZM40,172a12,12,0,0,1-12-12V64A12,12,0,0,1,40,52H184a12,12,0,0,1,12,12V76H176a20,20,0,0,0-20,20v76Zm196,20a12,12,0,0,1-12,12H176a12,12,0,0,1-12-12V96a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12ZM132,208a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h40A4,4,0,0,1,132,208Zm80-96a4,4,0,0,1-4,4H192a4,4,0,0,1,0-8h16A4,4,0,0,1,212,112Z"/></svg>`;
}
