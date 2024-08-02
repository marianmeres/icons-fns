export const iconPhThinBoxArrowUp = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M219.58,70.21l-16-32A4,4,0,0,0,200,36H56a4,4,0,0,0-3.58,2.21l-16,32A4,4,0,0,0,36,72V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V72A4,4,0,0,0,219.58,70.21ZM58.47,44H197.53l12,24H46.47ZM208,212H48a4,4,0,0,1-4-4V76H212V208A4,4,0,0,1,208,212Zm-45.17-78.83a4,4,0,0,1-5.66,5.66L132,113.66V184a4,4,0,0,1-8,0V113.66L98.83,138.83a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0Z"/></svg>`;
}
