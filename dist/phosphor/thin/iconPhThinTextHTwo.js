export const iconPhThinTextHTwo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M148,56V176a4,4,0,0,1-8,0V120H44v56a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0v56h96V56a4,4,0,0,1,8,0Zm92,148H200l38.36-51.15a28,28,0,1,0-48.77-26.18,4,4,0,1,0,7.54,2.66A20.36,20.36,0,0,1,200,124,20,20,0,0,1,232,148L188.8,205.6A4,4,0,0,0,192,212h48a4,4,0,0,0,0-8Z"/></svg>`;
}
