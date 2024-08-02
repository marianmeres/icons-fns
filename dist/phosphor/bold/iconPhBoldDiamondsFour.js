export const iconPhBoldDiamondsFour = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M119.51,108.49a12,12,0,0,0,17,0l38-38a12,12,0,0,0,0-17l-38-38a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17ZM128,41l21,21L128,83,107,62Zm8.49,106.54a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17l38,38a12,12,0,0,0,17,0l38-38a12,12,0,0,0,0-17ZM128,215l-21-21,21-21,21,21Zm-19.51-95.52-38-38a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17l38,38a12,12,0,0,0,17,0l38-38A12,12,0,0,0,108.49,119.51ZM62,149,41,128l21-21,21,21Zm178.49-29.52-38-38a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17l38,38a12,12,0,0,0,17,0l38-38A12,12,0,0,0,240.49,119.51ZM194,149l-21-21,21-21,21,21Z"/></svg>`;
}
