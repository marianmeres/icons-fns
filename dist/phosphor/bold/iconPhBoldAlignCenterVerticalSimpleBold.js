export const iconPhBoldAlignCenterVerticalSimpleBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,116H180V48a20,20,0,0,0-20-20H96A20,20,0,0,0,76,48v68H48a12,12,0,0,0,0,24H76v68a20,20,0,0,0,20,20h64a20,20,0,0,0,20-20V140h28a12,12,0,0,0,0-24Zm-52,88H100V52h56Z"/></svg>`;
}
