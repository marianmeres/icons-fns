export const iconPhThinAsteriskSimpleThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M209.48,99.71l-75.06,30,52.74,67.8a4,4,0,0,1-.71,5.62A3.93,3.93,0,0,1,184,204a4,4,0,0,1-3.16-1.54L128,134.52,75.16,202.46A4,4,0,0,1,72,204a4,4,0,0,1-2.45-.84,4,4,0,0,1-.71-5.62l52.74-67.8-75.06-30a4,4,0,1,1,3-7.42L124,122.09V40a4,4,0,0,1,8,0v82.09l74.51-29.8a4,4,0,1,1,3,7.42Z"/></svg>`;
}
