export const iconPhLightMedalMilitaryLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M207,42H49A15,15,0,0,0,34,57v49.21a15,15,0,0,0,8.79,13.65L109.19,150a46,46,0,1,0,37.62,0l66.4-30.18A15,15,0,0,0,222,106.21V57A15,15,0,0,0,207,42ZM162,54v76l-34,15.45L94,130V54ZM46,106.21V57a3,3,0,0,1,3-3H82v70.5L47.76,108.94A3,3,0,0,1,46,106.21ZM162,192a34,34,0,1,1-34-34A34,34,0,0,1,162,192Zm48-85.79a3,3,0,0,1-1.76,2.73L174,124.5V54h33a3,3,0,0,1,3,3Z"/></svg>`;
}
