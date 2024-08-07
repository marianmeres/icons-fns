export const iconPhBoldTidalLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M252.49,87.51l-38-38a12,12,0,0,0-17,0L168,79,136.49,47.51a12,12,0,0,0-17,0L88,79,58.49,49.51a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17l38,38a12,12,0,0,0,17,0L88,113l23,23L79.51,167.51a12,12,0,0,0,0,17l40,40a12,12,0,0,0,17,0l40-40a12,12,0,0,0,0-17L145,136l23-23,29.51,29.52a12,12,0,0,0,17,0l38-38A12,12,0,0,0,252.49,87.51ZM50,117,29,96,50,75,71,96Zm78,82-23-23,23-23,23,23Zm0-80L105,96l23-23,23,23Zm78-2L185,96l21-21,21,21Z"/></svg>`;
}
