export const iconPhDuotoneGooglePhotosLogoDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,88a63.69,63.69,0,0,1-14,40H128V24A64,64,0,0,1,192,88ZM64,168a64,64,0,0,0,64,64V128H78A63.69,63.69,0,0,0,64,168Z" opacity="0.2"/><path d="M232,120H192.49A72,72,0,0,0,128,16a8,8,0,0,0-8,8V63.51A72,72,0,0,0,16,128a8,8,0,0,0,8,8H63.51A72,72,0,0,0,128,240a8,8,0,0,0,8-8V192.49A72,72,0,0,0,240,128,8,8,0,0,0,232,120ZM120,223.43A56.09,56.09,0,0,1,72,168a55.31,55.31,0,0,1,10-32h38ZM120,120H32.57A56.09,56.09,0,0,1,88,72a55.31,55.31,0,0,1,32,10Zm16-87.43A56.09,56.09,0,0,1,184,88,55.31,55.31,0,0,1,174,120H136ZM168,184A55.31,55.31,0,0,1,136,174V136h87.43A56.09,56.09,0,0,1,168,184Z"/></svg>`;
}
