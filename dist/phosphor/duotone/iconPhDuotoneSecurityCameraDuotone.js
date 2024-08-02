export const iconPhDuotoneSecurityCameraDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M221.66,85.66l-120,120a8,8,0,0,1-11.32,0L52.69,168,184,36.69l37.66,37.65A8,8,0,0,1,221.66,85.66Z" opacity="0.2"/><path d="M248,136a8,8,0,0,0-8,8v16H195.31L177,141.66l50.34-50.35a16,16,0,0,0,0-22.62l-56-56a16,16,0,0,0-22.63,0L2.92,158.94A10,10,0,0,0,10,176H49.37l35.32,35.31a16,16,0,0,0,22.62,0L165.66,153,184,171.31A15.86,15.86,0,0,0,195.31,176H240v16a8,8,0,0,0,16,0V144A8,8,0,0,0,248,136ZM160,24l12.69,12.69L49.37,160H24.46ZM96,200,64,168,184,48l32,32Z"/></svg>`;
}
