export const iconPhBoldNumberSquareSixBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204Zm-76-16a40,40,0,0,0,5.06-79.67L146.3,86.15a12,12,0,1,0-20.6-12.3l-32.24,54A40,40,0,0,0,128,188Zm0-56a16,16,0,1,1-16,16A16,16,0,0,1,128,132Z"/></svg>`;
}
