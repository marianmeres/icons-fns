export const iconPhDuotoneSkipForwardCircleDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32ZM96,168V88l64,40Z" opacity="0.2"/><path d="M160,80a8,8,0,0,0-8,8v25.57L100.24,81.22A8,8,0,0,0,88,88v80a8,8,0,0,0,12.24,6.78L152,142.43V168a8,8,0,0,0,16,0V88A8,8,0,0,0,160,80Zm-56,73.57V102.43L144.91,128ZM128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"/></svg>`;
}
