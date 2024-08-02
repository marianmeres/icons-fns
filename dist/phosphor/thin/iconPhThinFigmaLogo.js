export const iconPhThinFigmaLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184.46,96A36,36,0,0,0,168,28H96A36,36,0,0,0,79.54,96a36,36,0,0,0,1.56,64.76A40,40,0,1,0,140,196V150.59A36,36,0,1,0,184.46,96ZM196,64a28,28,0,0,1-28,28H140V36h28A28,28,0,0,1,196,64Zm-56,36h5.41a36.41,36.41,0,0,0-5.41,5.41ZM68,64A28,28,0,0,1,96,36h36V92H96A28,28,0,0,1,68,64Zm64,132a32,32,0,1,1-32-32h32Zm0-40H96a28,28,0,0,1,0-56h36Zm36,0a28,28,0,1,1,28-28A28,28,0,0,1,168,156Z"/></svg>`;
}
