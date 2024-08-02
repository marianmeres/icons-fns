export const iconPhFillToilet = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M60,88H196a4,4,0,0,0,4-4V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V84A4,4,0,0,0,60,88ZM88,48h15.73A8.18,8.18,0,0,1,112,55.47,8,8,0,0,1,104,64H88.27A8.18,8.18,0,0,1,80,56.53,8,8,0,0,1,88,48Zm136,64.06a8,8,0,0,0-8-8.06H40a8,8,0,0,0-8,8.06,96.1,96.1,0,0,0,51.68,85.08l-3.47,24.27a16.43,16.43,0,0,0,1.63,10A16,16,0,0,0,96,240h63.66a16.52,16.52,0,0,0,9.72-3,16,16,0,0,0,6.46-15.23l-3.52-24.6A96.1,96.1,0,0,0,224,112.06ZM96,224l2.93-20.5a96.15,96.15,0,0,0,58.14,0L160,224Z"/></svg>`;
}
