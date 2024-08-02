export const iconPhThinStackPlus = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236,200a4,4,0,0,1-4,4H212v20a4,4,0,0,1-8,0V204H184a4,4,0,0,1,0-8h20V176a4,4,0,0,1,8,0v20h20A4,4,0,0,1,236,200Zm-14-75.46-94,54.83L34,124.54a4,4,0,0,0-4,6.92l96,56a4,4,0,0,0,4,0l96-56a4,4,0,1,0-4-6.92ZM28,80a4,4,0,0,1,2-3.46l96-56a4,4,0,0,1,4,0l96,56a4,4,0,0,1,0,6.92l-96,56a4,4,0,0,1-4,0l-96-56A4,4,0,0,1,28,80Zm11.94,0L128,131.37,216.06,80,128,28.63ZM142,219.21l-14,8.16L34,172.54a4,4,0,0,0-4,6.92l96,56a4,4,0,0,0,4,0l16-9.34a4,4,0,1,0-4-6.91Z"/></svg>`;
}
