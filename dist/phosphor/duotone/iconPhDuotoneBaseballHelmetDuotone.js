export const iconPhDuotoneBaseballHelmetDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M88,176a20,20,0,1,1,20-20A20,20,0,0,1,88,176Zm64-48v24a64,64,0,0,1-64,64h40a64,64,0,0,0,64-64V128Z" opacity="0.2"/><path d="M88,128a28,28,0,1,0,28,28A28,28,0,0,0,88,128Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,88,168Zm160-48H223.7A104,104,0,0,0,16,128v24a72.08,72.08,0,0,0,72,72h40a72.08,72.08,0,0,0,72-72V136h48a8,8,0,0,0,0-16Zm-64,32a56.06,56.06,0,0,1-50.46,55.72A71.87,71.87,0,0,0,160,152V136h24Zm-32-32a8,8,0,0,0-8,8v24a56,56,0,0,1-112,0V128a88,88,0,0,1,175.64-8Z"/></svg>`;
}
