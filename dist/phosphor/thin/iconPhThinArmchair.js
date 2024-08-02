export const iconPhThinArmchair = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212,92.23V72a36,36,0,0,0-36-36H80A36,36,0,0,0,44,72V92.23a36,36,0,0,0,0,71.55V200a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V163.78a36,36,0,0,0,0-71.55ZM80,44h96a28,28,0,0,1,28,28V92.23A36,36,0,0,0,172,128v4H84v-4A36,36,0,0,0,52,92.23V72A28,28,0,0,1,80,44ZM208.3,156H208a4,4,0,0,0-4,4v40a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V160h0a4,4,0,0,0-4-4h-.3A28,28,0,1,1,76,128v40a4,4,0,0,0,8,0V140h88v28a4,4,0,0,0,8,0V128a28,28,0,1,1,28.3,28Z"/></svg>`;
}
