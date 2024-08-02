export const iconPhBoldAddressBookTabsBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-20,80h16v40H188Zm16-24H188V52h16ZM52,52H164V204H52ZM188,204V172h16v32Zm-36.38-39a43.22,43.22,0,0,0-15.16-23,36,36,0,1,0-56.92,0,43.35,43.35,0,0,0-15.16,23,12,12,0,1,0,23.24,6c2.2-8.54,11-15,20.38-15s18.19,6.44,20.38,15a12,12,0,0,0,23.24-6ZM96,120a12,12,0,1,1,12,12A12,12,0,0,1,96,120Z"/></svg>`;
}
