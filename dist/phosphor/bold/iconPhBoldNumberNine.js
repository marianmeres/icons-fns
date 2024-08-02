export const iconPhBoldNumberNine = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M188,96a60,60,0,1,0-60,60,59.21,59.21,0,0,0,7.81-.53l-26.27,46.64a12,12,0,0,0,20.92,11.78l49.54-88A59.57,59.57,0,0,0,188,96ZM92,96a36,36,0,1,1,36,36A36,36,0,0,1,92,96Z"/></svg>`;
}
