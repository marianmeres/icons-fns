export const iconPhBoldNumberSquareNineBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204Zm-96-61.36a39.81,39.81,0,0,0,14.94,5L109.7,169.85a12,12,0,1,0,20.6,12.3L162.64,128A40,40,0,1,0,108,142.64ZM114.14,100a16,16,0,0,1,27.72,16l0,0a16,16,0,0,1-27.7-16Z"/></svg>`;
}
