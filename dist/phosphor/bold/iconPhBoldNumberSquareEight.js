export const iconPhBoldNumberSquareEight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM88,152a40,40,0,1,0,67.6-28.91,36,36,0,1,0-55.2,0A39.87,39.87,0,0,0,88,152Zm40,16a16,16,0,1,1,16-16A16,16,0,0,1,128,168Zm-12-68a12,12,0,1,1,12,12A12,12,0,0,1,116,100Z"/></svg>`;
}
