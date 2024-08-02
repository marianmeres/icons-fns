export const iconPhDuotoneCircleHalfTilt = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M195.88,195.88a96,96,0,0,1-135.76,0L195.88,60.12A96,96,0,0,1,195.88,195.88Z" opacity="0.2"/><path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM65.78,65.77A88.08,88.08,0,0,1,184.3,60.39L60.38,184.31a88,88,0,0,1,5.4-118.54ZM190.22,190.23A88.1,88.1,0,0,1,71.7,195.61L195.62,71.69a88,88,0,0,1-5.4,118.54Z"/></svg>`;
}
