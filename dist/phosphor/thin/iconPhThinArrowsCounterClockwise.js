export const iconPhThinArrowsCounterClockwise = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M88,100H40a4,4,0,0,1-4-4V48a4,4,0,0,1,8,0V86.34L65.46,64.89A91.39,91.39,0,0,1,130,37.94h.51A91.43,91.43,0,0,1,194.8,64.13a4,4,0,0,1-5.6,5.72,83.44,83.44,0,0,0-58.68-23.91h-.47a83.52,83.52,0,0,0-58.94,24.6L49.66,92H88a4,4,0,0,1,0,8Zm128,56H168a4,4,0,0,0,0,8h38.34l-21.45,21.46A83.52,83.52,0,0,1,126,210.06h-.47A83.44,83.44,0,0,1,66.8,186.15a4,4,0,0,0-5.6,5.72,91.43,91.43,0,0,0,64.28,26.19H126a91.39,91.39,0,0,0,64.55-26.95L212,169.66V208a4,4,0,0,0,8,0V160A4,4,0,0,0,216,156Z"/></svg>`;
}
