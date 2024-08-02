export const iconPhBoldNumberSquareThree = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM92,80a12,12,0,0,1,12-12h48a12,12,0,0,1,9.83,18.88l-18.34,26.2A40,40,0,1,1,95.43,176a12,12,0,1,1,17.14-16.79A16,16,0,1,0,124,132a12,12,0,0,1-9.83-18.88L129,92H104A12,12,0,0,1,92,80Z"/></svg>`;
}
