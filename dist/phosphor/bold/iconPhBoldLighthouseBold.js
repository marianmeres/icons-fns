export const iconPhBoldLighthouseBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,84a12,12,0,0,0-12,12v8H192.87l-4.93-49.2A12,12,0,0,0,184,47L141.1,8.89l-.3-.25a20,20,0,0,0-25.6,0l-.3.25L72,47a12,12,0,0,0-4,7.76L63.13,104H48V96a12,12,0,0,0-24,0v20a12,12,0,0,0,12,12H60.72l-8.63,86.1A20,20,0,0,0,72,236H184a20,20,0,0,0,19.9-21.95L195.28,128H220a12,12,0,0,0,12-12V96A12,12,0,0,0,220,84ZM128,29.36,144.46,44H111.54ZM90.86,68h74.28l3.61,36H140V96a12,12,0,0,0-24,0v8H87.25ZM76.42,212l3.21-32h96.74l3.21,32ZM174,156H82l2.8-28h86.32Z"/></svg>`;
}
