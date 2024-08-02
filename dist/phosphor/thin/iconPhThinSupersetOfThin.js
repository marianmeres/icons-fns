export const iconPhThinSupersetOfThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212,200a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8H208A4,4,0,0,1,212,200Zm-60-44H56a4,4,0,0,0,0,8h96a60,60,0,0,0,0-120H56a4,4,0,0,0,0,8h96a52,52,0,0,1,0,104Z"/></svg>`;
}
