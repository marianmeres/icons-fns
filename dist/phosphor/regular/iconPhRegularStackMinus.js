export const iconPhRegularStackMinus = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230.91,124A8,8,0,0,1,228,134.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,121.09l92,53.65,92-53.65A8,8,0,0,1,230.91,124ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26ZM232,192H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm-92,23.76-12,7L36,169.09A8,8,0,0,0,28,182.91l96,56a8,8,0,0,0,8.06,0l16-9.33A8,8,0,1,0,140,215.76Z"/></svg>`;
}
