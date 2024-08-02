export const iconPhBoldNumberEightBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M162.44,118.91a52,52,0,1,0-68.88,0,60,60,0,1,0,68.88,0ZM100,80a28,28,0,1,1,28,28A28,28,0,0,1,100,80Zm28,124a36,36,0,1,1,36-36A36,36,0,0,1,128,204Z"/></svg>`;
}
