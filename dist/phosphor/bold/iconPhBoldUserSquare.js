export const iconPhBoldUserSquare = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,24V196.24a83.63,83.63,0,0,0-39.08-39.67,52,52,0,1,0-73.84,0A83.63,83.63,0,0,0,52,196.24V52ZM100,120a28,28,0,1,1,28,28A28,28,0,0,1,100,120Zm28,52a59.34,59.34,0,0,1,37.69,13.31A60.45,60.45,0,0,1,181.06,204H74.94a60.45,60.45,0,0,1,15.37-18.69A59.34,59.34,0,0,1,128,172Z"/></svg>`;
}
