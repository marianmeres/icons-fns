export const iconPhBoldTrolleyBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M92,224a20,20,0,1,1-20-20A20,20,0,0,1,92,224Zm124-20a20,20,0,1,0,20,20A20,20,0,0,0,216,204Zm24-36H60V75.31a19.86,19.86,0,0,0-5.86-14.14L32.49,39.51a12,12,0,0,0-17,17L36,77v91H32a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24Z"/></svg>`;
}
