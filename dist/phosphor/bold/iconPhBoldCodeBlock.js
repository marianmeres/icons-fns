export const iconPhBoldCodeBlock = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M51.51,104.49l-32-32a12,12,0,0,1,0-17l32-32a12,12,0,1,1,17,17L45,64,68.49,87.51a12,12,0,0,1-17,17Zm48,0a12,12,0,0,0,17,0l32-32a12,12,0,0,0,0-17l-32-32a12,12,0,1,0-17,17L123,64,99.51,87.51A12,12,0,0,0,99.51,104.49ZM200,36H180a12,12,0,0,0,0,24h16V196H60V140a12,12,0,0,0-24,0v60a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Z"/></svg>`;
}
