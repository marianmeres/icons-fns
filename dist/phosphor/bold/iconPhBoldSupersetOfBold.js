export const iconPhBoldSupersetOfBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,200a12,12,0,0,1-12,12H56a12,12,0,0,1,0-24H208A12,12,0,0,1,220,200Zm-68-52H56a12,12,0,0,0,0,24h96a68,68,0,0,0,0-136H56a12,12,0,0,0,0,24h96a44,44,0,0,1,0,88Z"/></svg>`;
}
