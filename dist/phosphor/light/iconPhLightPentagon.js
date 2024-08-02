export const iconPhLightPentagon = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224.35,89.15,136.41,20.82l-.13-.1a14,14,0,0,0-16.56,0l-.13.1L31.65,89.15a14,14,0,0,0-5,15.45l32,107.56c0,.05,0,.09,0,.13A14,14,0,0,0,72,222H184a14,14,0,0,0,13.33-9.71s0-.08,0-.13l32-107.56A14,14,0,0,0,224.35,89.15ZM217.9,101s0,.08,0,.12l-32,107.54A2,2,0,0,1,184,210H72a2,2,0,0,1-1.89-1.34l-32-107.54s0-.08,0-.12a2,2,0,0,1,.72-2.23l.13-.1,87.91-68.3a2,2,0,0,1,2.28,0l87.91,68.3.13.1A2,2,0,0,1,217.9,101Z"/></svg>`;
}
