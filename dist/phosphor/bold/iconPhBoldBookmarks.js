export const iconPhBoldBookmarks = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,20H96A20,20,0,0,0,76,40V60H64A20,20,0,0,0,44,80V224a12,12,0,0,0,19.32,9.51L108,199.14l44.69,34.37A12,12,0,0,0,172,224V177.6l20.68,15.91A12,12,0,0,0,212,184V40A20,20,0,0,0,192,20ZM148,199.63l-32.69-25.14a12,12,0,0,0-14.63,0L68,199.63V84h80Zm40-40-16-12.3V80a20,20,0,0,0-20-20H100V44h88Z"/></svg>`;
}
