export const iconPhBoldNumberSixBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,100a59.21,59.21,0,0,0-7.81.53l26.27-46.64a12,12,0,0,0-20.92-11.78L76,130.13A60,60,0,1,0,128,100Zm0,96a36,36,0,1,1,36-36A36,36,0,0,1,128,196Z"/></svg>`;
}
