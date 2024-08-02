export const iconPhDuotoneCellSignalSlashDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,40V200a8,8,0,0,1-8,8H32a8,8,0,0,1-5.66-13.66l160-160A8,8,0,0,1,200,40Z" opacity="0.2"/><path d="M213.92,210.62l-160-176A8,8,0,1,0,42.07,45.38l58.07,63.86L20.69,188.68A16,16,0,0,0,32,216H192a16.13,16.13,0,0,0,4.56-.68l5.52,6.06a8,8,0,1,0,11.84-10.76ZM32,200l78.9-78.89L182.64,200ZM128.18,92.51a8,8,0,0,1,0-11.31l52.51-52.5A16,16,0,0,1,208,40V159.63a8,8,0,0,1-16,0V40L139.5,92.51A8,8,0,0,1,128.18,92.51Z"/></svg>`;
}
