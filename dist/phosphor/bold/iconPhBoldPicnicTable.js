export const iconPhBoldPicnicTable = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244,124H203.42l-24-48H192a12,12,0,0,0,0-24H64a12,12,0,0,0,0,24H76.58l-24,48H12a12,12,0,0,0,0,24H40.58L21.27,186.63a12,12,0,1,0,21.46,10.73L67.42,148H188.58l24.69,49.36a12,12,0,1,0,21.46-10.73L215.42,148H244a12,12,0,0,0,0-24ZM79.42,124l24-48h49.16l24,48Z"/></svg>`;
}
