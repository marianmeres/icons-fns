export const iconPhThinSeatbelt = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,108A40,40,0,1,0,88,68,40,40,0,0,0,128,108Zm0-72A32,32,0,1,1,96,68,32,32,0,0,1,128,36Zm76,188a4,4,0,0,1-4,4H56a4,4,0,0,1-2.65-7l103-90.84a68,68,0,0,0-95.44,51,4,4,0,0,1-3.94,3.37,4.48,4.48,0,0,1-.64-.05A4,4,0,0,1,53,179.89,76,76,0,0,1,162.8,124.43L189.35,101a4,4,0,1,1,5.3,6L66.58,220H200A4,4,0,0,1,204,224Zm-13.56-75.33A75.52,75.52,0,0,1,204,192a4,4,0,0,1-8,0,67.55,67.55,0,0,0-12.13-38.77,4,4,0,1,1,6.57-4.56Z"/></svg>`;
}
