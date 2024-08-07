export const iconPhThinComputerTower = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M164,72a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,72Zm-4,28H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm44-60V216a12,12,0,0,1-12,12H64a12,12,0,0,1-12-12V40A12,12,0,0,1,64,28H192A12,12,0,0,1,204,40Zm-8,0a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H192a4,4,0,0,0,4-4ZM128,172a8,8,0,1,0,8,8A8,8,0,0,0,128,172Z"/></svg>`;
}
