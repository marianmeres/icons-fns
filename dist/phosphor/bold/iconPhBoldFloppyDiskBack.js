export const iconPhBoldFloppyDiskBack = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,28H83.31a19.86,19.86,0,0,0-14.14,5.86L33.86,69.17A19.86,19.86,0,0,0,28,83.31V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM92,52h72V72H92ZM204,204H52V85L68,69v7A20,20,0,0,0,88,96h80a20,20,0,0,0,20-20V52h16Zm-76-96a42,42,0,1,0,42,42A42,42,0,0,0,128,108Zm0,60a18,18,0,1,1,18-18A18,18,0,0,1,128,168Z"/></svg>`;
}
